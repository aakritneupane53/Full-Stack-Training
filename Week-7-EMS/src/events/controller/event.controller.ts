import { Request, Response, NextFunction } from "express";

import { AppError } from "../../utils/AppError";
import { fetchEvent, fetchEvents, postEvent } from "../services/event.services";
import { eventDto, eventSchema } from "../schema/event.schema";
import { success } from "zod";

export async function postEventHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const event = req.body as eventDto;
    const result = await postEvent(event);
    if (!result) throw new AppError("Could not wtie to the db", 500, result);
    return res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.log(`Error in postEventHandler ${error}`);
    next(error);
  }
}
