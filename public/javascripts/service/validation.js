app.service('ValidationService', function () {
    this.ValidateEmail = function (email) {
        if (!email) {
            return "Email không được trống";
        }

        if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
            return "Email không hợp lệ";
        }

        return "";
    }
})