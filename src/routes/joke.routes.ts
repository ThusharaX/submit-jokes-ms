import { Router } from "express";
import {
  getJokes,
  createJoke,
  getJokeById,
  updateJoke,
  deleteJoke,
} from "../controllers/joke.controller";

const router = Router();

router.get("/", getJokes);
router.post("/", createJoke); // ! from frontend
router.get("/:id", getJokeById);
router.patch("/:id", updateJoke);
router.delete("/:id", deleteJoke);

export default router;
