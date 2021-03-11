/**
 * @Date:   2021-03-11T21:34:54+01:00
 * @Last modified time: 2021-03-11T21:47:11+01:00
 */
 var nodemailer = require('nodemailer');

 var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'daria.brazhnyk.suisse@gmail.com',
     pass: 'No way :)'
   }
 });

 var mailOptions = {
   from: 'daria.brazhnyk.suisse@gmail.com',
   to: 'dar.rock.life@gmail.com',
   subject: 'COCA-COLA. Sending Email using Node.js',
   text: 'COCA-COLA!'
 };

 transporter.sendMail(mailOptions, function(error, info){
   if (error) {
     console.log(error);
   } else {
     console.log('Email sent: ' + info.response);
   }
 });
