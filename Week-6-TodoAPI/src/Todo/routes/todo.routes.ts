import express from "express";

import validate from "../../middleware/validation.middleware";
import authorize from "../../middleware/authorization.middleware";

import { createToDoSchema, patchToDoSchema } from "../schema/todo.schema";

import {
  fetchToDos,
  postToDos,
  fetchToDoByID,
  deleteToDoById,
  updateToDoById,
  updateToDoByIdPatch,
} from "../controller/todo.controller";

const router = express.Router();

router.post("/todos", validate(createToDoSchema), authorize, postToDos);

router.get("/todos", fetchToDos);
router.get("/todos/:id", fetchToDoByID);
router.delete("/todos/:id", deleteToDoById);
router.put("/todos/:id", validate(createToDoSchema), updateToDoById);
router.patch("/todos/:id", validate(patchToDoSchema), updateToDoByIdPatch);

export default router;
