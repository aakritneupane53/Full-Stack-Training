import mongoose from "mongoose";

import { Booking } from "../model/booking.model";
import { AppError } from "../../utils/AppError";
import { Event } from "../../events/model/event.model";
import { bookingSchema } from "../schema/booking.schema";

type bookingType = {
  userId: string;
  eventId: string;
  seats: number;
};

export async function createBooking({ userId, eventId, seats }: bookingType) {
  const result = bookingSchema.safeParse({ userId, eventId, seats });
  if (!result.success)
    throw new AppError(
      `Invalid input ${result.error.flatten()}`,
      400,
      result.error.flatten(),
    );
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // check for the existing booking
    const existingBooking = await Booking.findOne({ eventId, userId }).session(
      session,
    );
    if (existingBooking)
      throw new AppError("The booking for the event already exists", 409);

    // atomic update seat count to handle the race condition
    const updatedEvent = await Event.findOneAndUpdate(
      {
        _id: eventId,
        status: "published",
        // date:{$gt:new Date()},
        $expr: {
          $lte: [{ $add: ["$bookedSeats", seats] }, "$capacity"],
        },
      },
      {
        $incr: { bookedSeats: seats },
      },
      { returnDocument: "after", session },
    );

    if (!updatedEvent)
      throw new AppError("Failed to update event or unavailable seats", 400);

    // create a new Booking
    const newBooking = await Booking.create([{ eventId, userId, seats }], {
      session,
    });

    await session.commitTransaction();
    return newBooking;
  } catch (err) {
    session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
}
