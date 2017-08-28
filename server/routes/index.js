var express = require('express');
var router = express.Router();

var controllers = require('../controllers/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/mtest', function(req, res) {
    controllers.check_create(req, res);
});




module.exports = router;