import { uuid } from 'uuidv4';

class User {
  public readonly id = uuid();

  public name: string;
  public email: string;
  public password: string;

  constructor({ name, email, password }: Omit<User, 'id'>) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default User;
