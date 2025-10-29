const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
          return done(null, false, { message: "Tên đăng nhập không tồn tại" });
        }

        if (!user.is_active) {
          return done(null, false, { message: "Tài khoản đã bị khóa" });
        }

        const isValid = await user.validPassword(password);
        if (!isValid) {
          return done(null, false, { message: "Mật khẩu không đúng" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ["password_hash"] },
    });
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
