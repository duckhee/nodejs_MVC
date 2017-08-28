var express = require('express');
var router = express.Router();


router.get('/login', function(req, res, next) {
    res.render('./member/login_page');
});

router.get('/registe', function(req, res, next) {
    res.render('./member/registe_page');
});

router.get('/profile', function(req, res, next) {
    res.render('./member/profile');
});

router.get('/field_setting', function(req, res, next) {
    res.render('./setting/setting_page');
});

module.exports = router;