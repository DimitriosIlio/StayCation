const transporter = require('./nodemailerConfig');

function sendRegistrationEmail(email) {
  // Define email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Welcome to our website!',
    text: 'Thank you for registering on our website.'
  };

  // Send email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = {
  sendRegistrationEmail
};
