import nodemailer from 'nodemailer';

import IMailClient, { IMail } from '../IMailClient';

class MailTrapMailClient implements IMailClient {
  constructor(
    private transporter = nodemailer.createTransport({
      host: process.env.MAIL_TRAP_HOST,
      port: process.env.MAIL_TRAP_PORT,
      auth: {
        user: process.env.MAIL_TRAP_USER,
        pass: process.env.MAIL_TRAP_PASS,
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
