import 'dotenv/config';

import Queue from './configs/queue';

Queue.process();

console.log('Listening queues...');
