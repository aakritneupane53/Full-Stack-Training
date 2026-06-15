import { Request, Response, NextFunction } from "express";

import { AppError } from "../../utils/AppError";
import { loginService } from "../services/auth.services";
import {
  writeUserToDb,
  fetchUserById,
} from "../../user/services/user.services";

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

export async function loginHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email, password } = req.body;
    const { accessToken, refreshToken } = await loginService({
      email,
      password,
    });
    if (!accessToken || !refreshToken)
      throw new AppError("Internal Server Error", 500);

    // set refresh token to the http only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "user succesfully logged in",
      accessToken,
    });
  } catch (error) {
    console.log(`Error in login handler\n`, error.message);
    next(error);
  }
}

export function logoutHandler(req: Request, res: Response, next: NextFunction) {
  try {
    res.clearCookie("refreshToken");
    return res
      .status(200)
      .json({ success: true, message: "Logout successful" });
  } catch (error) {
    console.log(`Error in logout handler\n`, error.message);
    next(error);
  }
}

export async function fetchClient(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.user as { id: string };
    const user = await fetchUserById(id);
    if (!user) throw new AppError("User not found", 404);
    const userObj = user.toObject();
    delete userObj["password"];

    return res.status(200).json({ success: true, data: userObj });
  } catch (error) {
    next(error);
  }
}
