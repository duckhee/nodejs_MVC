var router = require('express').Router();
var controllers = require('../controllers/value');
var values = require('../models/values');

router.get('/', function(req, res, next) {
    console.log('first middleware');
    next();
});

//get data you wnat ?channel=
router.get('/', function(req, res, next) {
    console.log('second middleware');
    var value_info = req.query.channel;
    console.log(value_info);
    console.log(typeof(value_info));
    res.render('test_index', {
        channel: value_info
    });
});


router.get('/', function(req, res, next) {
    console.log('failed');
    res.render('index');
});

router.get('/test', function(req, res, next) {
    res.json('failed');
});

//ajax test
router.get('/ajax', function(req, res, next) {
    var value_info = req.query.channel;
    console.log('ajax data');
    console.log(value_info);
    console.log(typeof(value_info));
    if (value_info) {
        var data = controllers.list(value_info, function(err, value) {
            if (value) {
                res.json(value);
            } else if (err) {
                console.log(err.code);
                console.log('err stack: ');
                console.log(err.stack);
                console.log('err');
                next();
            } else {
                res.redirect('/test');
            }
        });

    } else {
        next();
    }
});
//insert data ?field=integer&insert=data 
router.get('/insert', function(req, res, next) {
    console.log('first insert');
    var field_id = req.query.field;
    var insert = req.query.value;
    var insert_info = { "field_id": field_id, "value": insert };
    if (insert_info) {
        controllers.insert(insert_info, function(err, result) {
            if (result) {
                res.json('success');
            } else {
                res.json('failed');
            }
        });
    }
});

module.exports = router;