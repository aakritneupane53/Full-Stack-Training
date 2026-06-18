import { Request, Response, NextFunction } from "express";

import {
  createBooking,
  getUserBooking,
  deleteBookingById,
  fetchBookings,
  fetchBookingsForEvent,
} from "../services/booking.services";
import { AppError } from "../../utils/AppError";
import { success } from "zod";

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
    return res.json(200).json({
      success: true,
      message: "Booking deleted successfully",
      data: deletedBooking,
    });
  } catch (error) {
    console.log("Error in delete booking controller", error);
    next(error);
  }
}

export async function getUserBookings(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id: userId }: { id: string } = req.user;
    const bookings = await getUserBooking(userId);
    return res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    console.log("Error in getUsers booking controller", error);
    next(error);
  }
}
