import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const diseaseSchema = new Schema ({
  name: String,
  latitude: Number,
  longitude: Number,
  radius: Number,
  color: String
});

export default mongoose.model('Disease', diseaseSchema);
