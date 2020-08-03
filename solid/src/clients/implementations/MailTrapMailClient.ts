import nodemailer from 'nodemailer';

import IMailClient, { IMail } from '../IMailClient';

class MailTrapMailClient implements IMailClient {
  constructor(
    private transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'cbd61a1b4075b9',
        pass: 'f3c9d5fb8004f4',
      },
    })
  ) {}

  async sendMail(mail: IMail) {
    await this.transporter.sendMail({
      to: {
        name: mail.to.name,
        address: mail.to.email,
      },
      from: {
        name: mail.from.name,
        address: mail.from.email,
      },
      subject: mail.subject,
      html: mail.body,
    });
  }
}

export default MailTrapMailClient;
