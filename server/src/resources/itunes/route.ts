import { Router } from "express";
import controller from "@itunes/controller";

const router = Router();

router.get("/", controller.getItunes);

export default router;
