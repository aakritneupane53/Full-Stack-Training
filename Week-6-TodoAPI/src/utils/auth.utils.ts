import jwt from "jsonwebtoken";

export function createToken(user: unknown) {
  return jwt.sign(user, process.env.JWT_SECERET as string);
}

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECERET as string);
}
