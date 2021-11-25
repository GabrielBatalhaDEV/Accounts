import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "reflect-metadata";
import "./database";
import { router } from "./routes";
import cors from "cors";
import { GeneralError } from "./Resources/Error/GeneralError";
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(GeneralError);

dotenv.config();

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Running");
});
