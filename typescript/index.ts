import express from 'express';
// eslint-disable-next-line import/extensions
import router from './router/schedule';
// eslint-disable-next-line import/extensions

const app = express();
const PORT = 8000;
app.use('/', router);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
