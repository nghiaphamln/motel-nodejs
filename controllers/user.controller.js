class UserController {
    static Login = (req, res) => {
        res.render('users/login', {
            title: 'Đăng nhập',
            page: 'login'
        });
    }

    static Register = (req, res) => {
        res.render('users/register', {
            title: 'Đăng ký',
            page: 'login'
        });
    }
}

module.exports = UserController;