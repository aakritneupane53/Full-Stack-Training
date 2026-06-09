import type { CreateUserDto } from "../schema/user.schema";
import User from "../Models/user.model";
import bcrypt from "bcryptjs";

export const createUser = async (createUserDto: CreateUserDto) => {
  const hashedPassword = await bcrypt.hash(createUserDto.password, 12);
  const user = await User.create({
    ...createUserDto,
    password: hashedPassword,
  });
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ email });
  return user;
};
