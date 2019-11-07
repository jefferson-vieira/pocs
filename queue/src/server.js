import 'dotenv/config';

import express from 'express';

import QueueBoard from './configs/queue-board';

import UserController from './controllers/user';

const app = express();
app.use(express.json());

app.use(QueueBoard);

app.use(UserController);

app.listen(1800, () => {
  console.log('Listening server...');
});
