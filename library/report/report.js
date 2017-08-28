var mailer = require('nodemailer');
var config = require('../config.json');
var transporter = mailer.createTransport(config.mail);

var server_error = 'server error report : ';

var mail_option = {
    from: 'IOT Server report <' + config.mail.auth.user + '>',
    to: 'fain9301@yahoo.com',
    subject: 'server error report'
};

exports.send_error = function(err_data, callback) {
    server_error += err_data;
    mail_option.text = server_error;
    transporter.sendMail(mail_option, function(err, info) {
        if (err) {
            console.log("could not send report : ");
            console.log(server_error);
            transporter.close();
            callback(false);
        } else {
            console.log("message %s and :%s", info.messageId, info.response);
            transporter.close();
            callback(true);

        }
    });
};