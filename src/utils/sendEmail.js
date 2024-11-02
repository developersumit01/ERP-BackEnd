import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.SECURE,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendEmail = async (email, subject, message) => {
  try {
    let mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: subject,
      text: message,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send(error);
      } else {
        res.send({ Message: "The OTP has been send successfully!!" });
      }
    });
  } catch (error) {
    alert("Their is some error while sending the OTP");
  }
};

export default sendEmail;
