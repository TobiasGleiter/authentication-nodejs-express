"use strict";
import cors from "cors";
import "dotenv/config";

import express, { Express, Request, Response } from "express";
import { options } from "./cors.config";

const app: Express = express();
const port = process.env.PORT;

app.use(cors(options));
app.use(express.json());

app.get("/products/:id", function (req: Request, res: Response) {
  res.json({ msg: "This is CORS-enabled for localhost:3000!" });
});

app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
