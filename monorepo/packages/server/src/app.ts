import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import routes from './router';

const app = express();

app.use(cors());
app.use(helmet());

app.use(routes);

export default app;
