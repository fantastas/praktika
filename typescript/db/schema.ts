import mongoose from 'mongoose';

const { Schema } = mongoose;
const ScheduleSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default ScheduleSchema;
