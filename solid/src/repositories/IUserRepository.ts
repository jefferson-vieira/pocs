import User from '../entities/User';

interface IUserRepository {
  findByEmail(email: string): User;

  save(user: User): void;
}

export default IUserRepository;
