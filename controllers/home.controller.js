class HomeController {
    static Index = (req, res) => {
        let data = {
            title: 'Trang chủ',
            page: 'home'
        }

        res.render('index', data);
    }
}


module.exports = HomeController;
