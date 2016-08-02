var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ItsMe' });
});

router.post('/', function(req, res, next) {
  var transporter = nodemailer.createTransport({
      service : 'Gmail',
      auth: {
          user : 'mohit.909.kr@gmai.com',
          pass : 'hehehahhaha'
      }
  })
    var mainOption = {
        from  : 'Mohit <mohit.909.kr@gmail.com>',
        to : 'mohit.909.kr@gmail.com',
        subject : 'Anonyomous message',
        text : 'You have the following detail of anonymous',
        html:"<p> Detail </p> Name : '+req.body.username'   Email : '+req.body.email'  Contact : '+req.body.contactno'  Message : '+req.body.comment'"
    };

    transporter.sendMail(mainOption, function(error, info){

        if (error){
            console.log(error);
            res.redirect('/');
        }
        else {
            console.log(' Message Sent')
        }
    });
});
module.exports = router;
