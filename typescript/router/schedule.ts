/* eslint-disable import/extensions */
import express from 'express';
import ScheduleModel from '../db/model';

const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date());
  next();
});

router.route('/schedules').get((req, res) => {
  ScheduleModel.find({}, (err, schedules) => {
    if (err) {
      console.log(err);
    } else {
      console.log('All Schedules.\n');
      res.send(schedules);
    }
  });
});

router.route('/insert').post((req) => {
  ScheduleModel.insertMany(req.body).then(() => {
    console.log('Data inserted');
  }).catch((error) => {
    console.log(error);
  });
});

router.route('/delete').delete((req) => {
  ScheduleModel.deleteMany(req.body).then(() => {
    console.log('Data deleted');
  }).catch((error) => {
    console.log(error);
  });
});

export default router;
