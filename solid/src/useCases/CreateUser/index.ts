import FakeUserRepository from '../../repositories/implementations/FakeUserRepository';
import MailTrapMailClient from '../../clients/implementations/MailTrapMailClient';

import CreateUserUseCase from './CreateUserUseCase';
import CreateUserController from './CreateUserController';

const fakeUserRepository = new FakeUserRepository();
const mailTrapClient = new MailTrapMailClient();

const createUserUseCase = new CreateUserUseCase(
  fakeUserRepository,
  mailTrapClient
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
