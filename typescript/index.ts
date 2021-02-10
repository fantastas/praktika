import express from 'express';
import mongoose from 'mongoose';
// eslint-disable-next-line import/extensions
import router from './router/schedule';
// eslint-disable-next-line import/extensions
const uri = 'mongodb://127.0.0.1:27017/schedules';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
const app = express();
const PORT = 8000;
app.use('/', router);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
