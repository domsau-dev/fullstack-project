import express from 'express';
import cors from 'cors';
import { getHandler } from './handlers/get-handler';

const app = express();
const port = 3000;
app.get('/', cors({ origin: 'http://localhost:4200' }), getHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});