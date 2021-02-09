const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const port = 4000;
const uri = 'mongodb://127.0.0.1:27017/schedules';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const { connection } = mongoose;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();
app.use('/', router);
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const { Schema } = mongoose;
const ScheduleSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);

ScheduleModel.deleteMany({}, (err) => {
  console.log(err);
});

const Schedule1 = new ScheduleModel({ title: 'some1', description: 'something1' });
const Schedule2 = new ScheduleModel({ title: 'some2', description: 'something2' });
const Schedule3 = new ScheduleModel({ title: 'some3', description: 'something3' });
const Schedule4 = new ScheduleModel({ title: 'some4', description: 'something4' });
const Schedule5 = new ScheduleModel({ title: 'some5', description: 'something5' });

const schedules = [Schedule1, Schedule2, Schedule3, Schedule4, Schedule5];

for (let i = 0; i < schedules.length; i += 1) {
  schedules[i].save((err, schedule) => {
    if (err) {
      console.log(err);
    } else {
      console.log(schedule);
    }
  });
}

router.route('/insertdata').post((req, res) => {
  ScheduleModel.insertMany(
    [
      {
        title: req.body.title,
        description: req.body.description,
      },
    ],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    },
  );
});

router.route('/schedules').get((req, res) => {
  ScheduleModel.find({}, (err, schedule) => {
    if (err) {
      console.log(err);
    } else {
      res.send(schedule);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
