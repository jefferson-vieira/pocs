import { Request, Response } from 'express';

import CreateUserDTO from './CreateUserDTO';
import CreateUserUseCase from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body as CreateUserDTO;

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}

export default CreateUserController;
