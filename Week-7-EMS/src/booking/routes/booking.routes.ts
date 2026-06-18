import express from "express";

import authorize from "../../middleware/authorize.middleware";
import RoleAuthorize from "../../middleware/roleaccess.middleware";
import {
  bookingHandler,
  deleteBooking,
} from "../controller/booking.controller";

const router = express.Router();

router.delete("/:id", deleteBooking);
router.post("/event/:eventId", bookingHandler);

export default router;
