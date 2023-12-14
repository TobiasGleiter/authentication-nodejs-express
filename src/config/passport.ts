"use strict";
import "dotenv/config";
import passport from "passport";
import passportGoogle from "passport-google-oauth";

const GoogleStrategy = passportGoogle.OAuth2Strategy;

const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET as string;
const GOOGLE_CALLBACK_URL: string = process.env.GOOGLE_CALLBACK_URL as string;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      // here you can create a user in the database if you want to
      return done(null, profile);
    },
  ),
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj: unknown, cb) {
  cb(null, obj);
});

export default passport;
