import Mail from '../configs/mail';

export default {
  key: 'Mail',
  handle: async ({ data }) => {
    const { user } = data;

    await Mail.sendMail({
      from: 'Node Queue <node@queue.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá ${user.name}, seja bem-vindo!`
    });
  }
};
