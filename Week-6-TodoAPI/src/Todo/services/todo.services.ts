import { setCache, getCache, invalidateCache } from "../../cache/cache.service";
import redis from "../../config/redis";
import { ToDo, ToDoT } from "../model/todo.model";
import mongoose, { Document } from "mongoose";

export async function fetchToDo() {
  try {
    const TTL = 300;
    const cachedToDos = await getCache("todos");
    if (cachedToDos) return cachedToDos;
    const result: Document<ToDoT> = await ToDo.find();
    if (!result) throw new Error("Errror fetching the todos from the db");
    await setCache("todos", result, TTL);
    return result;
  } catch (error) {
    return Promise.reject(error.message as string);
  }
}

export async function fetchToDoById(id: string) {
  try {
    const objId = new mongoose.Types.ObjectId(id);
    const cachedResult = await getCache(`todo:${id}`);
    if (cachedResult) return cachedResult;
    const result = await ToDo.findOne({ _id: objId });
    if (!result) throw new Error("The todo with the provided id doesn't exist");
    await setCache(`todo:${id}`, result, 300);
    return result;
  } catch (error) {
    return Promise.reject(error.message as string);
  }
}

export async function postToDo(
  title: string,
  completed: boolean,
  description: string,
) {
  try {
    const result = await ToDo.create({
      title: title.trim(),
      completed,
      description,
    });
    await invalidateCache("todos");
    return result;
  } catch (error) {
    return Promise.reject(error.message as string);
  }
}

export async function deleteToDo(id: string) {
  try {
    const objId = new mongoose.Types.ObjectId(id);

    //invalidate the cache
    await invalidateCache("todos");
    await invalidateCache(`todo:${id}`);

    const result = await ToDo.deleteOne({ _id: objId });

    return result;
  } catch (error) {
    return Promise.reject(error.message as string);
  }
}
