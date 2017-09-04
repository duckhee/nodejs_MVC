var router = require('express').Router();
var valueControllers = require('../controllers/value');
var cameraControllers = require('../controllers/camera');
var values = require('../models/values');
var moment = require('moment'); //시간 모듈
var fs = require('fs'); // 파일 저장

var mqtt = require('mqtt'); //mqtt 모듈
var client = mqtt.connect('mqtt://13.124.28.87'); //mqtt 서버 접속



router.get('/', function(req, res, next) {
    console.log('first middleware');
    next();
});

//get data you wnat ?channel=
router.get('/', function(req, res, next) {
    console.log('second middleware');
    var value_info = req.query.channel;
    var img_src = moment().format('YYYYMMDDHH') + ".jpg";
    var folder_path = moment().format('YYYYMMDD');
    console.log(img_src);
    fs.exists('./images/' + value_info + "/" + folder_path + "/" + img_src, function(exists) {
        if (!exists) {
            img_src = moment().add(-1, 'hour');
            console.log(img_src);
        }
    });
    console.log(img_src);
    res.render('test_index', {
        channel: value_info,
        img_path: "/upload/" + value_info + "/" + '20170830' + "/" + '2017083015.jpg'
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
        var data = valueControllers.list(value_info, function(err, value) {
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

//ajax images
router.get('/ajaxpath', function(req, res) {
    var channel = req.query.channel;
    var camera_info = {};
    cameraControllers.find_picture(camera_info, function(err, rows){
        if(rows){
            res.json(rows);
        }else if(err){
            res.json('failed');
        }else{
            res.json();
        }
    });

});
    
//insert data ?field=integer&value=data 
router.get('/insert', function(req, res, next) {
    console.log('first insert');
    var field_id = req.query.field;
    var insert = req.query.value;
    var insert_info = { "field_id": field_id, "value": insert };
    if (insert_info) {
        valueControllers.insert(insert_info, function(err, result) {
            if (result) {
                res.json('success');
            } else {
                res.json('failed');
            }
        });
    }
});

// on/off command
router.get('/onoff', function(req, res, next) {
    var device_num = req.query.channel;
    var command = req.query.command;

    if (device_num) {

        client.publish('/' + device_num + '/onoff', command);
        res.json('success');

    } else {
        res.json('failed');
    }

});

module.exports = router;