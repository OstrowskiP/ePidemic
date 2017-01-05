import { dbConnectionString } from './config';
import mongoose from 'mongoose';

export default () => {
  mongoose.connect(dbConnectionString);

  mongoose.connection.on('error', (error) => {
    console.log('An error occured during connection to db:' + error);
  })
}
