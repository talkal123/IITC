import express from "express";
import { validateUser } from "../middleware/validator.js";

import {
  getAllUsers,
  addNewUser,
  getRandomUser,
  getUserByID,
  partialUserUpdate,
  fullUserUpdate,
  deleteUser
} from "../controllers/usersControllers.js";

const router = express.Router();

// Get All Jokes
router.get("/all", getAllUsers);

// Add a new Joke
router.post("/", validateUser, addNewUser);

// Get a random Joke
router.get("/random", getRandomUser);

// Get a Joke by ID
router.get("/:id", getUserByID);

// Update a Joke
router.patch("/:id", partialUserUpdate);

// Update Full Joke
router.put("/:id", validateUser, fullUserUpdate);

// Delete Joke
router.delete("/:id", deleteUser);

export default router;
