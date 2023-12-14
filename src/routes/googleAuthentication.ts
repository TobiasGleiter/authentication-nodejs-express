import express, { NextFunction, Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";

const router: Router = express.Router();
const TOKEN_SECRET: string = process.env.TOKEN_SECRET as string;

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  function (req: Request, res: Response) {
    if (!req.user) {
      throw new Error("Something went wrong...");
    }

    const token = jwt.sign(
      { id: req.user.sub, name: req.user.name },
      TOKEN_SECRET,
      {
        expiresIn: 60 * 60,
      },
    );
    res.cookie("auth", token, { httpOnly: true });
    res.redirect("http://localhost:3000/");
  },
);

router.get("/logout", (req: Request, res: Response, next: NextFunction) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.clearCookie("auth");
    res.redirect("http://localhost:3000/");
  });
});

export default router;
