module.exports = function(app, obj, randomString, secretTokenNo) {
    app.get("/", function(req, res, next) {
        return res.render('langdingpage');
    });

    app.get('/home', function(req, res, next) {
        return res.render('main', {
            'template': 'home'
        });
    });

    app.get('/airdrop', function(req, res, next) {
        return res.render('main', {
            'template': 'airdrop'
        });
    });


};