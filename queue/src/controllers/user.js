import { Router } from 'express';

import Queue from '../configs/queue';

const router = Router();

router.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  const user = { name, email, password };

  await Queue.add('Mail', { user });

  return res.json(user);
});

export default router;
