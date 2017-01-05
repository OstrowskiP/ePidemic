import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const diseaseDefinitionSchema = new Schema({
  name: String,
  color: String
});

export default mongoose.model('DiseaseDefinition', diseaseDefinitionSchema);
