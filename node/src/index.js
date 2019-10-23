import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  log.error(err.stack);
  res.status(500).send('Something broke!')
});

app.listen(PORT, () => {
  log.success(`Server is listening on port ${PORT}...`);
  log.warn('Press Ctrl+C to quit.');
});
