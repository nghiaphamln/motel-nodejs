class UserController {
    static Login = (req, res) => {
        res.render('users/login', {
            title: 'Đăng nhập',
            page: 'Login'
        });
    }
}

module.exports = UserController;