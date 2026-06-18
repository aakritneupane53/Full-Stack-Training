import express from "express";

import authorize from "../../middleware/authorize.middleware";
import RoleAuthorize from "../../middleware/roleaccess.middleware";
import {
  bookingHandler,
  deleteBooking,
  getUserBookings,
} from "../controller/booking.controller";

const router = express.Router();

router.get("/me", getUserBookings);
router.delete("/:id", deleteBooking);
router.post("/event/:eventId", bookingHandler);

export default router;
