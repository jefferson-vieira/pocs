import IUserRepository from '../../repositories/IUserRepository';
import ICreateUserRequestDTO from './CreateUserDTO';
import User from '../../entities/User';
import IMailClient from '../../clients/IMailClient';

class CreateUserCase {
  constructor(
    private userRepository: IUserRepository,
    private mailClient: IMailClient
  ) {}

  async execute(userRequest: ICreateUserRequestDTO) {
    const userAlreadyExists = this.userRepository.findByEmail(
      userRequest.email
    );

    if (userAlreadyExists) throw new Error('User already exists');

    const user = new User(userRequest);

    this.userRepository.save(user);

    await this.sendWelcomeMail(user);
  }

  private async sendWelcomeMail(user: User) {
    await this.mailClient.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      from: {
        name: 'Plataforma',
        email: 'sac@plataforma.com',
      },
      subject: 'Seja bem-vindo à nossa plataforma',
      body: '<p>Você já pode utilizar nossa plataforma!</p>',
    });
  }
}

export default CreateUserCase;
