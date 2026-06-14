import { AppError } from "../../utils/AppError";
import User from "../../user/model/user.model";
import { hashPassword, comparePassword } from "../../utils/hash";
import {
  writeUserToDb,
  fetchUserByEmail,
} from "../../user/services/user.services";
type Login = {
  email: string;
  password: string;
};

export async function loginService({
  email,
  password,
}: Login): Promise<string> {
  // check if the user exists in db=> match password => generate access and refreshToken return access token, set refreshToken to the http only cookie
  const user = await fetchUserByEmail(email.trim());
  if (!user)
    throw new AppError("User with the given email does not exist", 400);

  // match the password
}
