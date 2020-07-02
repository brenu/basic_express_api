'use strict';
import User from '../models/User';
const nodemailer = require('nodemailer');

class PasswordController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userExists) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    const { email } = req.body;

    // Create temporary mail from ethereal.mail
    const testAccount = await nodemailer.createTestAccount();

    // Reusable transporter for the methods
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    try {
      const response = await transporter.sendMail({
        from: '"Company name" <foo@bar.com>',
        to: `${email}`,
        subject: 'Password Reset',
        text: 'This is a test e-mail',
      });

      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(response));

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}

export default new PasswordController();
