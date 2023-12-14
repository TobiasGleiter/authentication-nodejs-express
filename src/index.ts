"use strict";
import cors from "cors";
import "dotenv/config";
import passport from "passport";

import express, { Express } from "express";
import { options } from "./cors.config";

const app: Express = express();
const port = process.env.PORT;

app.use(cors(options));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.listen(port);
