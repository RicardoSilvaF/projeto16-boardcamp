import { Router } from "express";
import validateSchema from "../middlewares/middlewares.js";
import { gameSchema } from "../schemas/schemas.js";
import { getGames, postGames } from "../controllers/controllers.js";

const router = Router();

router.get("/games", getGames);
router.post("/games", validateSchema(gameSchema), postGames);

export default router;