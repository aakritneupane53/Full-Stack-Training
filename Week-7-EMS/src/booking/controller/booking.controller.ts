import { Request, Response, NextFunction } from "express";

import {
  createBooking,
  getUserBooking,
  deleteBookingById,
  fetchBookings,
  fetchBookingsForEvent,
} from "../services/booking.services";
import { AppError } from "../../utils/AppError";

export async function bookingHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id: userId } = req.user;
    const { eventId } = req.params as { eventId: string };
    const { seats } = (req.body as { seats: number }) || 1;
    console.log({ userId, eventId, seats });
    const newBooking = await createBooking({ userId, eventId, seats });
    return res.status(200).json({
      success: true,
      message: `New booking succesfully created`,
      data: newBooking,
    });
  } catch (error) {
    console.log("error in create booking handler", error);
    next(error);
  }
}

export async function deleteBooking(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params as { id: string };
    const { id: userId } = req.user;
    const deletedBooking = await deleteBookingById(id, userId);
    return res
      .json(200)
      .json({
        success: true,
        message: "Booking deleted successfully",
        data: deletedBooking,
      });
  } catch (error) {
    next(error);
  }
}
