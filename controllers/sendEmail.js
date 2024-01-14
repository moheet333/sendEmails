const { StatusCodes } = require("http-status-codes");
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   auth: {
//     user: "riley6@ethereal.email",
//     pass: "dgn8bMDECsK8FxRHJQ",
//   },
// });

const sendEmail = async (req, res) => {
  // const testAccount = await nodemailer.createTestAccount();

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   auth: {
  //     user: "riley6@ethereal.email",
  //     pass: "dgn8bMDECsK8FxRHJQ",
  //   },
  // });

  // let info = await transporter.sendMail({
  //   from: '"Moheet Shendarkar" <moheetshendarkar@gmail.com>',
  //   to: "prathameshprogrammer@gmail.com",
  //   subject: "Hello",
  //   html: "<h2>Sending Emails with NodeJs</h2>",
  // });
  const msg = {
    to: "prathameshprogrammer@gmail.com", // Change to your recipient
    from: "moheetshendarkar@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  const sendGridInfo = await sgMail.send(msg);

  res.status(StatusCodes.OK).json({ sendGridInfo });
};

module.exports = {
  sendEmail,
};
