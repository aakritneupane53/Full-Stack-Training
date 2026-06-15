import express from "express";

import { fetchUsersHandlers } from "../controller/admin.controller";
import authorize from "../../middleware/authorize.middleware";
import RoleAuthorize from "../../middleware/roleaccess.middleware";

const router = express.Router();

router.get("/users", fetchUsersHandlers);

export default router;
