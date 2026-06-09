import { Request, Response } from "express";
import { Document } from "mongoose";

import { ToDoT } from "../model/todo.model";

import { postToDo, fetchToDo } from "../services/todo.services";

export async function fetchToDos(_req: Request, res: Response) {
  try {
    const result: Document<ToDoT> = await fetchToDo();
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
