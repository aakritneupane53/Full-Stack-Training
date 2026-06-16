import express from "express";

import validate from "../../middleware/validate.middleware";
import { eventDto, eventSchema } from "../schema/event.schema";
import {
  fetchPublishedEventHandler,
  postEventHandler,
  fetchAllEventsHandler,
  fetchDraftEventHandler,
  fetchDraftEventsHandler,
  fetchPublishedEventsHandler,
  updateEventHandler,
  deleteEventHandler,
  publishEventHandler,
} from "../controller/event.controller";
import authorize from "../../middleware/authorize.middleware";
import RoleAuthorize from "../../middleware/roleaccess.middleware";

const router = express.Router();

router.get("/", fetchPublishedEventsHandler);
router.get("/:id", fetchPublishedEventHandler);

router.get(
  "/draft",
  authorize,
  RoleAuthorize("admin"),
  fetchDraftEventsHandler,
);
router.get(
  "/draft/:id",
  authorize,
  RoleAuthorize("admin"),
  fetchDraftEventHandler,
);
router.post(
  "/",
  validate(eventSchema),
  authorize,
  RoleAuthorize("admin"),
  postEventHandler,
);
router.put(
  "/:id",
  validate(eventSchema),
  authorize,
  RoleAuthorize("admin"),
  updateEventHandler,
);
router.delete(
  "/:id",
  validate(eventSchema),
  authorize,
  RoleAuthorize("admin"),
  deleteEventHandler,
);
router.patch(
  "/:id/publish",
  validate(eventSchema),
  authorize,
  RoleAuthorize("admin"),
  publishEventHandler,
);
// router.get("/", fetc);

export default router;
