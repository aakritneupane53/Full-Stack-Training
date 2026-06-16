import { Request, Response, NextFunction } from "express";

import { fetchAllUser } from "../../user/services/user.services";
import { AppError } from "../../utils/AppError";

export async function fetchUsersHandlers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const users = await fetchAllUser();
    if (!users)
      throw new AppError("Something went wrong whilfe fetching the users", 500);
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}
