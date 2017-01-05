import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const diseaseSchema = new Schema ({
  definition: { type: Schema.Types.ObjectId, ref: 'DiseaseDefinition'},
  latitude: Number,
  longitude: Number,
  radius: Number
});

export default mongoose.model('Disease', diseaseSchema);
