interface IMailAddress {
  email: string;
  name: string;
}

interface IMail {
  to: IMailAddress;
  from: IMailAddress;
  subject: string;
  body: string;
}

interface IMailClient {
  sendMail(mail: IMail): Promise<void>;
}

export { IMailAddress, IMail };

export default IMailClient;
