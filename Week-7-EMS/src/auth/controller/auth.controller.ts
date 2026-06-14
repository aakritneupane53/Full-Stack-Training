import { Request, Response, NextFunction } from "express";

import {
  writeUserToDb,
  fetchUserByEmail,
} from "../../user/services/user.services";
import { AppError } from "../../utils/AppError";

export async function registerHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { name, email, password, role } = req.body;
    const newUser = await writeUserToDb({ name, email, password, role });
    return res.status(201).json({
      message: "New user succesfully written to the db",
      data: newUser,
    });
    //  hash the password
  } catch (error) {
    console.log(`Error in register handler\n`, (error as AppError)?.message);
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email } = req.body;
  } catch (error) {}
}
