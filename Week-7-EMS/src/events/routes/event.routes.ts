import express from "express";

import validate from "../../middleware/validate.middleware";
import { eventDto, eventSchema } from "../schema/event.schema";
import {
  fetchEventHandler,
  postEventHandler,
} from "../controller/event.controller";

const router = express.Router();

router.get("/:id", fetchEventHandler);
router.post("/", validate(eventSchema), postEventHandler);

export default router;
