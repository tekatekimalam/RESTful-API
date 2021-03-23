import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

// parsing into json format
app.use(bodyParser.json());

// Routing
app.get("/", (req, res) => {
  res.send("Hello from home page");
});

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

// MENIT KE 34
