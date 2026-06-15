import { AppError } from "../../utils/AppError";
import User from "../../user/model/user.model";
import { hashPassword } from "../../utils/hash";
import redis from "../../config/redis";
type User = {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "user";
};

export async function fetchUserByEmail(email: string) {
  const user = await User.findOne({ email: email });
  return user;
}

export async function fetchUserById(id: string) {
  let user = await redis.get(`user:${id}`);
  if (user) return JSON.parse(user);
  user = await User.findOne({ _id: id });

  return user;
}

export async function writeUserToDb({ name, email, password, role }: User) {
  // check if the user with the given email exists
  const user = await fetchUserByEmail(email);
  if (user) throw new AppError("User with the given email already exist", 400);
  const hashedPassowrd = await hashPassword(password);

  const newUser = await User.create({
    name,
    email: email.trim().toLowerCase(),
    password: hashedPassowrd,
    role,
  });

  const newUserObj = newUser.toObject();
  delete newUserObj.password;
  return newUserObj;
}
