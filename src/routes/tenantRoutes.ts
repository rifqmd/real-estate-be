import { getTenant } from "../controllers/tenantController";
// import { getTenant, createTenant } from "../controllers/tenantController";
import express from "express";

const router = express.Router();

router.get("/:cognitoId", getTenant);
// router.post("/", createTenant);

export default router;
