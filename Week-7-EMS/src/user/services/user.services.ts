import User from "../model/user.model";

type User = {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "user";
};

export async function writeUserToDb({ name, email, password, role }: User) {
  const newUser = await User.create({
    name,
    email,
    password,
    role,
  });
  return newUser;
}

export async function fetchUserByEmail(email: string) {
  const user = await User.find({ email: email }).select({
    _id: 1,
    name: 1,
    email: 1,
    role: 1,
    password: 0,
  });

  return user;
}
