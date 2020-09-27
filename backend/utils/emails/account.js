const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const userVerificationMsg = (email, name, link) => {
  sgMail.send({
    to: email,
    from: "perfectnitish@gmail.com",
    subject: "Account Verification Required",
    text: "Please click on the link to activate your account",
    html: `<p>Hello ${name}! Please use the following link to verify your account:</p> <p>${process.env.SERVER_URL}/activate/${link}</p>`,
  });
};

const resetPasswordMail = (token, name, email) => {
  // email data
  const emailData = {
    from: "perfectnitish@gmail.com",
    to: email,
    subject: "Password Reset Instructions",
    text: `Please use the following link to reset your password: ${process.env.CLIENT_URL}/reset-password/${token}`,
    html: `<p>Hello ${name}! Please use the following link to reset your password:</p> <p>${process.env.CLIENT_URL}/resetpassword?acc=${token}</p>`,
  };
  sgMail.send(emailData);
};

module.exports = {
  userVerificationMsg,
  resetPasswordMail,
};
