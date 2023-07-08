const nodemailer = require('nodemailer');

async function replyToEmailByMessageId({messageId , recipientsEmail}) {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user:'investerstocker@gmail.com',
        pass: 'rzkixrqlgmtnhgmm',
      },
    });

    let mailOptions = {
        from: "investerstocker@gmail.com",
        to: recipientsEmail,
        subject: "AutoEmail",
        text: "Hey thank you for the email respond you soon ! ",
      };


    const info = await transporter.sendMail(mailOptions);

    console.log('Reply email sent successfully. Message ID:', info.messageId);
  } catch (error) {
    console.error('Error:', error);
  }
}



module.exports = replyToEmailByMessageId ;
