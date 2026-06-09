import bcrypt from "bcryptjs";
import type { RegisterUserDto } from "../schema/register.schema";
import User from "../../users/Models/user.model";

export const createUser = async (createUserDto: RegisterUserDto) => {
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
