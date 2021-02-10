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

router.route('/insert').post((req, res) => {
  ScheduleModel.insertMany(req.body);
  res.send('Insert completed.');
  router.route('/schedules');
});

router.route('/delete').delete((req, res) => {
  ScheduleModel.deleteMany(req.body).exec();
  res.send('Data deleted');
  router.route('/schedules');
});

export default router;
