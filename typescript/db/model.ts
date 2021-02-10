import mongoose from 'mongoose';
// eslint-disable-next-line import/extensions
import ScheduleSchema from './schema';

const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);
ScheduleModel.deleteMany({}).exec();

const Schedule1 = new ScheduleModel({ title: 'Monday', description: '11am JS practise.' });
const Schedule2 = new ScheduleModel({ title: 'Tuesday', description: '11am JS practise' });
const Schedule3 = new ScheduleModel({ title: 'Wednesday', description: '11am JS practise' });
const Schedule4 = new ScheduleModel({ title: 'Thurday', description: '11am JS practise' });
const Schedule5 = new ScheduleModel({ title: 'Friday', description: '11am JS practise' });
const Schedule6 = new ScheduleModel({ title: 'Saturday', description: 'Go to the gym' });
const Schedule7 = new ScheduleModel({ title: 'Sunday', description: 'Call family' });
const schedules = [Schedule1, Schedule2, Schedule3, Schedule4, Schedule5, Schedule6, Schedule7];

function insertdata(data:mongoose.Document<String>[]) {
  return ScheduleModel.insertMany(data);
}

insertdata(schedules);
export default ScheduleModel;
