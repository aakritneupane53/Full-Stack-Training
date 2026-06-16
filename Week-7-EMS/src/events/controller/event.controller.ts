import { Request, Response, NextFunction } from "express";

import { AppError } from "../../utils/AppError";
import {
  fetchPublishedEvent,
  fetchDraftEvent,
  fetchDraftEvents,
  fetchPublishedEvents,
  postEvent,
  fetchAllEvents,
  publishEvent,
  updateEvent,
  deleteEvent,
} from "../services/event.services";
import { eventDto, eventSchema } from "../schema/event.schema";
import { success } from "zod";

export async function fetchPublishedEventHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params as { id: string };
    if (!id) throw new AppError("No id provided", 400);
    const event = await fetchPublishedEvent(id);
    if (!event) throw new AppError("Invalid event id", 400, event);
    return res.status(200).json({ success: true, data: event });
  } catch (error) {
    console.log(`Error in fetchPublishedEventHandler ${error}`);
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

export async function fetchDraftEventHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params as { id: string };
    if (!id) throw new AppError("No id provided", 400);
    const event = await fetchDraftEvent(id);
    if (!event) throw new AppError("Invalid event id", 400, event);
    return res.status(200).json({ success: true, data: event });
  } catch (error) {
    console.log(`Error in fetchDraftEventHandler ${error}`);
    next(error);
  }
}

export async function fetchDraftEventsHandler(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const events = await fetchDraftEvents();
    console.log(events);
    if (!events) throw new AppError("Something went wrong", 500, events);
    return res.status(200).json({ success: true, data: events });
  } catch (error) {
    console.log(`Error in fetchDraftEventsHandler ${error}`);
    next(error);
  }
}
export async function fetchPublishedEventsHandler(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const events = await fetchPublishedEvents();
    if (!events) throw new AppError("Invalid event id", 400, events);
    return res.status(200).json({ success: true, data: events });
  } catch (error) {
    console.log(`Error in fetchpublishedEventsHandler ${error}`);
    next(error);
  }
}
export async function fetchAllEventsHandler(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const events = await fetchAllEvents();
    if (!events) throw new AppError("Invalid event id", 400, events);
    return res.status(200).json({ success: true, data: events });
  } catch (error) {
    console.log(`Error in fetchAllEventHandler ${error}`);
    next(error);
  }
}

export async function publishEventHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params as { id: string };
    if (!id) throw new AppError("No id provided", 400);
    const publishedEvent = await publishEvent(id);
    if (!publishedEvent)
      throw new AppError("Invalid event id", 400, publishedEvent);
    return res.status(200).json({ success: true, data: publishedEvent });
  } catch (error) {
    console.log(`Error in publishedEventHandler ${error}`);
    next(error);
  }
}
export async function updateEventHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params as { id: string };
    if (!id) throw new AppError("No id provided", 400);
    const data = req.body;
    const updatedEvent = await updateEvent(id, data);
    if (!updatedEvent)
      throw new AppError("Invalid event id", 400, updatedEvent);
    return res.status(200).json({ success: true, data: updatedEvent });
  } catch (error) {
    console.log(`Error in updateEventHandler ${error}`);
    next(error);
  }
}
export async function deleteEventHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params as { id: string };
    if (!id) throw new AppError("No id provided", 400);

    const deletedEvent = await deleteEvent(id);
    if (!deletedEvent)
      throw new AppError("Invalid event id", 400, deletedEvent);
    return res.status(200).json({ success: true, data: deletedEvent });
  } catch (error) {
    console.log(`Error in deleteEventHandler ${error}`);
    next(error);
  }
}
