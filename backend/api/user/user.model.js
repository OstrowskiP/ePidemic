import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema ({
  name: {
    type: String,
    default: ''
  },
  surname: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    enum: ['admin', 'operator', 'user'],
    default: 'operator'
  },
  active: {
    type: Boolean,
    default: false
  }
});

userSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', userSchema);
