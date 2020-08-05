import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  return res.json({ message: 'Hello World!' });
});

export default router;
