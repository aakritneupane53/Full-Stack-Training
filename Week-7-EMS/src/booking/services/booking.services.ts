import mongoose from "mongoose";

import Booking from "../model/booking.model";
import { AppError } from "../../utils/AppError";
import { fetchPublishedEvent } from "../../events/services/event.services";

type bookingType = {
  userId: string;
  eventId: string;
  seats: number;
};

export async function createBooking({ userId, eventId, seats }: bookingType) {
  //fetch the event
  const event = await fetchPublishedEvent(eventId);
  if (!event)
    throw new AppError(
      "No such event exists, please do provide correct event Id",
      400,
    );
  console.log(event);
  //check if the seats being booked<= available seats
  const availableSeats = event.capacity - event.bookedSeats;
  if (seats > availableSeats)
    throw new AppError(
      `Seats exceed the available seat count:${availableSeats}`,
      400,
    );

  // check if the booking with same set of userId and eventId doesn't exist
  const existsEvent = await Booking.findOne({
    eventId: eventId,
    userId: userId,
  });
  if (existsEvent)
    throw new AppError("User has already booked for the given event", 401);

  // create a new Bookign
  const newBooking = await Booking.create({ userId, eventId, seats });
  if (!newBooking)
    throw new AppError("Something went wrong while creating new Booking", 500);

  return newBooking;
}
