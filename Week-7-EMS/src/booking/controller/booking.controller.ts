import { Request, Response, NextFunction } from "express";

import { createBooking } from "../services/booking.services";
import { AppError } from "../../utils/AppError";

export async function bookingHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id: userId } = req.user;
    if (!userId) throw new AppError("No userId provided", 400);
    const { eventId } = req.params as { eventId: string };
    if (!eventId) throw new AppError("No eventId provided", 400);
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
