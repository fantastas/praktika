import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/schedules';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const { connection } = mongoose;

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

const Schedule1 = new ScheduleModel({ title: 'some1', description: 'something1' });
const Schedule2 = new ScheduleModel({ title: 'some2', description: 'something2' });
const Schedule3 = new ScheduleModel({ title: 'some3', description: 'something3' });
const Schedule4 = new ScheduleModel({ title: 'some4', description: 'something4' });
const Schedule5 = new ScheduleModel({ title: 'some5', description: 'something5' });
const schedules = [Schedule1, Schedule2, Schedule3, Schedule4, Schedule5];
ScheduleModel.insertMany(schedules);
export default ScheduleModel;
