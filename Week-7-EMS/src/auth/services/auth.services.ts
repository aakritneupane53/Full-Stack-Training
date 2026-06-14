import { AppError } from "../../utils/AppError";

import { comparePassword } from "../../utils/hash";
import { fetchUserByEmail } from "../../user/services/user.services";
import { encodeToken, decodeToken } from "../../utils/tokens";
type Login = {
  email: string;
  password: string;
};

export async function loginService({
  email,
  password,
}: Login): Promise<Record<string, any>> {
  // check if the user exists in db=> match password => generate access and refreshToken return access token, set refreshToken to the http only cookie
  const user = await fetchUserByEmail(email.trim());
  if (!user)
    throw new AppError("User with the given email does not exist", 400);

  // match the password
  const isMatching = await comparePassword(password, user.password);
  if (!isMatching)
    throw new AppError(
      "Invalid password, please re-enter correct password",
      400,
    );

  const refreshToken = encodeToken(
    { id: user._id.toString(), role: user.role },
    process.env.JWT_REFRESH_SECRET as string,
  );

  const accessToken = encodeToken(
    {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_ACCESS_SECRET as string,
  );

  return { accessToken, refreshToken };
}
