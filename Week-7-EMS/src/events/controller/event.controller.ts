import { Request, Response, NextFunction } from "express";

import { AppError } from "../../utils/AppError";
import { fetchEvent, fetchEvents, postEvent } from "../services/event.services";
import { eventDto } from "../schema/event.schema";
import { success } from "zod";

export async function fetchEventHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params as { id: string };
    if (!id) throw new AppError("No id provided", 400);
    const event = await fetchEvent(id);
    if (!event) throw new AppError("Invalid event id", 400, event);
    return res.status(200).json({ success: true, data: event });
  } catch (error) {
    console.log(`Error in fetchEventHandler ${error}`);
    next(error);
  }
}

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
