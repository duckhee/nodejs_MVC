var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

//router 등록
var index = require('./server/routes/index');
var member = require('./server/routes/member');
var channel = require('./server/routes/channel');

//library mailer 등록
var report = require('./library/report/report');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views/pages'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'secret my key',
    resave: false, //배포시 true로 설정
    saveUninitialized: true,
}));
//auth 설정 인증 등록
app.use(passport.initialize());
app.use(passport.session()); //passport use login sessions
app.use('/static', express.static(path.join(__dirname, 'public')));
//image를 읽어 오기 위한 폴더 위치 지정
app.use('/images', express.static(path.join(__dirname, '/images')));



//라우터 매핑
app.use('/', index);
app.use('/member/', member);
app.use('/channel/', channel);



//test url 제공 test용 
var test_router = require('./server/routes/test_router');
app.use('/test', test_router);




// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     res.render('./error/404');
//     next(err);
// });

//404 error handler
app.use(function(req, res, next) {
    res.status(404);
    res.render('./error/404');
    //next(err);
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    console.log('error : ' + err);
    console.log('error message : %s', err.stack);

    //email로 err 전송
    var error_msg = '';
    error_msg += err.stack;
    report.send_error(error_msg, function(callback) {
        if (callback === false) {
            console.log('report failed...');
        } else {
            console.log('report success');
        }
    });

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('./error/500');
});

module.exports = app;