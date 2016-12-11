import User from '../api/user/user.model';
import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import session from 'express-session'

export default (app) => {
  app.set('trust proxy', 1);
  app.use(session({
    secret: 'secret',
    proxy: true,
    cookie: { secure: false, httpOnly: false },
    name: 'sessionId',
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
}
