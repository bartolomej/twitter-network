import {getGraph} from './db';
const app = require('express').Router();

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/graph', (req, res) => {
  res.render('graph');
});

app.get('/api/graph', async (req, res) => {
  res.send(await getGraph(20));
});

export default app;