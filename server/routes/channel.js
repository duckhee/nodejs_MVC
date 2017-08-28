var express = require('express');
var router = express.Router();

router.get('/create', function(req, res, next) {
    next();
});

router.get('/create', function(req, res) {
    res.render('./channel/create_page');
});

router.post('/create', function(req, res, next) {
    next();
});
router.post('/create', function(req, res) {
    res.redirect('/channel/setting_page');
});

router.get('/modify', function(req, res, next) {
    res.render('./channel/modify_page');
});

router.get('/delete_page', function(req, res, next) {
    res.render('./channel/delete_page');
});

router.get('/detail', function(req, res, next) {
    res.render('./channel/detail_page');
});

router.get('/show_setting', function(req, res, next) {
    res.render('./channel/setting_page');
});



module.exports = router;