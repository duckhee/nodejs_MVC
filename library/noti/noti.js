var mailer = require('nodemailer');
var config = require('../config.json');

var transporter = mailer.createTransport(config.mailer);

var noti_info = 'IOF server send : ';

var mail_option = {
    from: 'IOT Server report <' + config.mail.auth.user + '>',
    to: 'fain9301@yahoo.com',
    subject: 'server error report'
};

exports.noti = function(noti_data, callback) {
    noti_info += noti_data;
    mail_option.text = noti_info;
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