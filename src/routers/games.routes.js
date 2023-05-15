import { Router } from "express";
import validateSchema from "../middlewares/middlewares.js";
import { gameSchema } from "../schemas/schemas.js";
import { getGames, postGames } from "../controllers/controllers.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames);
gamesRouter.post("/games", validateSchema(gameSchema), postGames);

export default gamesRouter;