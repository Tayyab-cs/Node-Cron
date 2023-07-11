const cron = require('node-cron');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const { SEND_TO } = process.env;

// Create mail transporter.
let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'jackie40@ethereal.email',
    pass: 'dj2PUrbxQJsjhdMxK6',
  },
});

// Sending emails every Tuesday at 15:57.
cron.schedule('24 16 * * 2', function () {
  console.log('---------------------');
  console.log('Running Cron Job');

  let messageOptions = {
    from: 'jackie40@ethereal.email',
    to: SEND_TO,
    subject: 'Scheduled Email',
    text: 'Hi there. This email was automatically sent by us.',
  };

  transporter.sendMail(messageOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log('Email successfully sent!');
    }
  });
});
