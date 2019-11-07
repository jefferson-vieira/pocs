import Queue from 'bull';

import redis from '../configs/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redis),
  name: job.key,
  handle: job.handle
}));

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find(queue => queue.name === name);
    return queue.bull.add(data);
  },
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', ({ data }, err) => {
        console.log(`Job failed:`, queue.name, { data, err });
      });
    });
  }
};
