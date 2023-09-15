class HomeController {
    static Index = (req, res) => {
        res.render('index', {
            title: 'Trang chủ',
            page: 'home'
        });
    }
}


module.exports = HomeController;
