import express from "express";

import authorize from "../../middleware/authorize.middleware";
import RoleAuthorize from "../../middleware/roleaccess.middleware";
import { bookingHandler } from "../controller/booking.controller";

const router = express.Router();

router.post("/event/:eventId", bookingHandler);
router.delete("/:id", bookingHandler);

export default router;
