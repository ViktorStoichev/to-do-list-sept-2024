import { Router } from "express";
import { homeController } from "./src/controllers/home-controller.js";

const router = Router();

router.use(homeController);

export const routes = router;