import { Request, Response } from "express";
import { Document } from "mongoose";

import { ToDoT } from "../model/todo.model";

import {
  postToDo,
  fetchToDo,
  fetchToDoById,
  deleteToDo,
  updateToDo,
  updateToDoPatch,
} from "../services/todo.services";

export async function fetchToDos(_req: Request, res: Response) {
  try {
    const result: Document<ToDoT> = await fetchToDo();
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

export async function fetchToDoByID(req: Request, res: Response) {
  try {
    //  const result: Document<ToDoT> = await fetchToDo();
    const { id } = req.params as { id: string };
    const result = await fetchToDoById(id);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

export async function postToDos(req: Request, res: Response) {
  try {
    const { title, completed, description } = req.body;
    const result = await postToDo(title, completed, description);
    return res
      .status(201)
      .json({ message: "Sucessfully cerated", data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteToDoById(req: Request, res: Response) {
  try {
    const { id } = req.params as { id: string };
    const result = await deleteToDo(id);
    return res
      .status(201)
      .json({ message: "Sucessfully deleted", data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

export async function updateToDoById(req: Request, res: Response) {
  try {
    const { id } = req.params as { id: string };
    if (!id) return res.status(401).json({ message: "No id provided" });
    const { title, completed, description } = req.body as {
      title: string;
      completed: boolean;
      description: string;
    };
    const updateResult = await updateToDo(id, {
      title,
      completed,
      description,
    });
    if (!updateResult)
      return res
        .status(500)
        .json({ message: "Something went wrong while writing into the db" });
    return res
      .status(201)
      .json({ message: "successfully updated", data: updateResult });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}
export async function updateToDoByIdPatch(req: Request, res: Response) {
  try {
    const { id } = req.params as { id: string };
    if (!id) return res.status(401).json({ message: "No id provided" });

    const updateResult = await updateToDoPatch(id, req.body);
    if (!updateResult)
      return res
        .status(500)
        .json({ message: "Something went wrong while updating into the db" });
    return res
      .status(201)
      .json({ message: "successfully updated", data: updateResult });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}
