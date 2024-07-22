import { Router } from "express";
import { getJokeTypes } from "../controllers/jokeType.controller";

const router = Router();

router.get("/", getJokeTypes);

export default router;
