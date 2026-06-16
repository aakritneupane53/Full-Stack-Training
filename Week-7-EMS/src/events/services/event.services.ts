import mongoose from "mongoose";
import { AppError } from "../../utils/AppError";
import { Event } from "../model/event.model";
import { eventSchema, eventDto } from "../schema/event.schema";

export async function fetchPublishedEvent(id: string) {
  const event = await Event.findOne({ _id: id, status: "published" });
  return event;
}
export async function fetchDraftEvent(id: string) {
  const event = await Event.findOne({ _id: id, status: "draft" });
  return event;
}
export async function fetchDraftEvents() {
  const events = await Event.find({ status: "draft" });
  return events;
}

export async function fetchAllEvents() {
  const events = await Event.find({});
  return events;
}
export async function fetchPublishedEvents() {
  const events = await Event.find({ status: "published" });
  return events;
}

export async function postEvent(event: eventDto) {
  // validate the data

  const newEvent = new Event(event);
  const result = await newEvent.save();
  return result;
}

export async function publishEvent(id: string) {
  const publisheddEvent = await Event.findByIdAndUpdate(id, {
    status: "published",
  });
  return publisheddEvent;
}

export async function updateEvent(id: string, newData: eventDto) {
  const updatedEvent = await Event.findOneAndReplace({ _id: id }, newData, {
    new: true,
    runValidators: true,
  });

  return updatedEvent;
}

export async function deleteEvent(id: string) {
  const deletedEvent = await Event.findByIdAndDelete(id);
  return deletedEvent;
}
