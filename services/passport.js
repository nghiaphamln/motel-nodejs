const localStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt')
const userModel = require('../models/user.model');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        userModel.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use(
        "local-signup",
        new localStrategy(
            {
                fullnameField: "name",
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true,
            },

            function (req, email, password, done) {
                process.nextTick(function () {
                    userModel.findOne({ "local.email": email }, function (err, user) {
                        if (err) return done(err);
                        if (user) {
                            return done(
                                null,
                                false,
                                req.flash("signupMessage", "Email này đã được sử dụng!")
                            );
                        }
                        if (password.length < 8) {
                            return done(
                                null,
                                false,
                                req.flash("signupMessage", "Mật khẩu phải dài tối thiểu 8 ký tự!")
                            );
                        }
                        else {
                            let newUser = new User();
                            newUser.local.name = req.body.fullname;
                            newUser.name = req.body.fullname;
                            newUser.local.email = email;
                            newUser.email = email;
                            newUser.local.password = newUser.generateHash(password);
                            newUser.save(function (err) {
                                if (err) throw err;
                                return done(null, newUser);
                            });
                        }
                    });
                });
            }
        )
    );
}