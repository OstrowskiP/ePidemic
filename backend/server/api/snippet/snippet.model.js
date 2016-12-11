import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const snippetSchema = new Schema ({
  isPrivate: Boolean,
  userId: String,
  value: String,
  syntax: String
});

export default mongoose.model('Snippet', snippetSchema);
