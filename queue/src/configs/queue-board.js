import { Router } from 'express';

import BullBoard from 'bull-board';

import Queue from './queue';

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

const router = Router();

router.use('/admin/queues', BullBoard.UI);

export default router;
