"use strict";
import cors from "cors";
import "dotenv/config";
import express, { Express } from "express";
import session from "express-session";
import passport from "./config/passport";
import { options } from "./cors.config";
import googleAuthentication from "./routes/googleAuthentication";

const app: Express = express();
const port = process.env.PORT;
const TOKEN_SECRET: string = process.env.TOKEN_SECRET as string;

app.use(cors(options));
app.use(express.json());
app.use(
  session({
    secret: TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth/google", googleAuthentication);

app.listen(port);
