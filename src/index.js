import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    console.log(`Server is running on port ${PORT}`);
  })
  .catch((error) => {
    console.log(("Mongodb connection error", error));
  });
