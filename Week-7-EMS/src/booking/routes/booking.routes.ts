import express from "express";

import authorize from "../../middleware/authorize.middleware";
import RoleAuthorize from "../../middleware/roleaccess.middleware";
import {
  bookingHandler,
  deleteBooking,
  fetchAllBookings,
  getUserBookings,
  fetchBookingsOfEvent,
} from "../controller/booking.controller";

const router = express.Router();

router.get("/me", getUserBookings);
router.get("/admin/bookings", RoleAuthorize("admin"), fetchAllBookings);
router.get(
  "/admin/bookings/:eventId",
  RoleAuthorize("admin"),
  fetchBookingsOfEvent,
);
router.delete("/:id", deleteBooking);
router.post("/event/:eventId", bookingHandler);

export default router;
