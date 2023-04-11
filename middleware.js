var jwt = require('jsonwebtoken');
var helper = require('./helper');
var UserModel = require('./models/User');

module.exports.AuthAdmin = (secretTokenNo, req, res, next) => {
    const token = req.cookies.token;

    if (typeof token != 'undefined') {
        UserModel.findOne({token_login: token}, (err, user) => {
            if (err || user == null) {
                res.clearCookie('token');
                return res.render('admin/user/login', {err : 'Tài khoản hoặc mật khẩu không đúng'});
            }

            user.password = '???';
            req.user = user;
            return next();
        })
    } else {
        res.clearCookie('token');
        return res.redirect('/admin/user/login');
    }
};

module.exports.checkIsLogin = async (secretTokenNo, req, res) => {
    const token = req.cookies.token;

    if (typeof token != 'undefined') {
        var result = await new Promise((resolve, reject) => {
            UserModel.findOne({token_login: token}, (err, user) => {
                if (err || user == null) {
                    reject(false);
                }
    
                user.password = '???';
                req.user = user;
                resolve(true);
            })
        });

        return result;
    } else {
        return false;
    }
};