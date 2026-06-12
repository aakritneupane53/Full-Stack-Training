import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const ctx = use(AuthContext);
  if (!ctx) throw new Error("Could not fetch the context");
  return ctx;
};

export default useAuth;
