import IUserRepository from '../IUserRepository';
import User from '../../entities/User';

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  save(user: User): void {
    this.users.push(user);
  }
}

export default FakeUserRepository;
