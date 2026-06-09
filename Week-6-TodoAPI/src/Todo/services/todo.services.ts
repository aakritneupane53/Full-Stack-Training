import { setCache, getCache, invalidateCache } from "../../cache/cache.service";
import { ToDo, ToDoT } from "../model/todo.model";
import { Document } from "mongoose";

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
