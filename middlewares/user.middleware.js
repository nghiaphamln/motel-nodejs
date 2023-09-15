const IsLogin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.redirect('/user/login');
    }

    return next();
}

module.exports = {
    IsLogin
};