import { AppError } from "../../utils/AppError";
import { Event } from "../model/event.model";
import { eventSchema, eventDto } from "../schema/event.schema";

export async function fetchEvent(id: string) {
  const event = await Event.findById(id);
  return event;
}

export async function fetchEvents() {
  const events = await Event.find({}).select({ password: 0 });
  return events;
}

export async function postEvent(event: eventDto) {
  // validate the data

  const newEvent = new Event(event);
  const result = await newEvent.save();
  return result;
}
