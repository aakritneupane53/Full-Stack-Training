import "dotenv/config";
import jwt from "jsonwebtoken";

type Payload = {
  id?: string;
  name?: string;
  email?: string;
  role: "admin" | "user";
};
export function encodeToken(
  payload: Payload,
  secret: string,
  expiration: "15m" | "7d",
): string {
  return jwt.sign(payload, secret, { expiresIn: expiration });
}
export function decodeToken(token: string, secret: string) {
  return jwt.verify(token, secret);
}
