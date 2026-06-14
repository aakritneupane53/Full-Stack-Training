import "dotenv/config";
import jwt from "jsonwebtoken";

type Payload = {
  id?: string;
  name?: string;
  email?: string;
  role: "admin" | "user";
};
export function encodeToken(payload: Payload, secret: string): string {
  return jwt.sign(payload, secret);
}
export function decodeToken(token: string, secret: string) {
  return jwt.verify(token, secret);
}
