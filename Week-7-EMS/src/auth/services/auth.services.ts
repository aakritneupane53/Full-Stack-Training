import bcrypt from "bcryptjs";
import { AppError } from "../../utils/AppError";

import User from "../../user/model/user.model";

type User = {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "user";
};

export async function fetchUserByEmail(email: string) {
  const user = await User.findOne({ email: email }).select({
    _id: 1,
    name: 1,
    email: 1,
    role: 1,
  });

  return user;
}

export async function writeUserToDb({ name, email, password, role }: User) {
  // check if the user with the given email exists
  const user = await fetchUserByEmail(email);
  if (user) throw new AppError("User with the given email already exist", 400);

  const newUser = await User.create({
    name,
    email,
    password,
    role,
  });

  const newUserObj = newUser.toObject();
  delete newUserObj.password;
  return newUserObj;
}
