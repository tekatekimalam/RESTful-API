import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

// in this folder the root path is /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to the database`);
});

export default router;
