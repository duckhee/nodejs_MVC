var LocalStrategy = require('passport-local').Strategy;

var mysql = require('mysql');

var db_config = require('./config');

var bcrypt = require('bcrypt');

var pool = mysql.createPool(db_config.development);

module.exports = function(passport) {
    // user 정렬? 로그인이 성공하면, serializeUser 메서드를 이용하여 사용자 정보를 Session에 저장 인증함수에서 done(null,user)에 의해 리턴된 값
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    // 인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어온다 user 역정렬 ?
    passport.deserializeUser(function(uesr, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    //using local strategy
    passport.use('local-login', new LocalStrategy({
            //인증을 어떤 걸로 할지 지정 해주는 것
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {

        }
    ));
    //using loocalstrategy sign up
    passport.use('local-registe', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        //이미 등록된 유저 인지 확인
        function(req, email, password, done) {
            User.findOne({ 'local-email': email }, function(err, user) {
                if (err) {
                    return done(err);
                }
                //이미 등록된 유저 이면
                if (user) {
                    var msg = 'already registe User';
                    return done(null, false, req.flash('errMsg', msg));

                } else { // 이미 등록 되지 않은 유저일 경우 신규 등록
                    var newUser = new User();

                }
            });
        }
    ));
};