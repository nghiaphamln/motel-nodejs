class UserController {
    static Login = (req, res) => {
        let data = {
            title: 'Đăng nhập',
            page: 'Login'
        }

        res.render('users/login', data);
    }
}

module.exports = UserController;