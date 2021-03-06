import configMongoose from './config/mongoose';
import configPassport from './config/passport';
import configRoutes from './config/routes';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

configMongoose();
configPassport(app);
configRoutes(app);

app.listen(3000, function(err) {
  if (err)
    return console.log(err);

  console.log('server is running')
});
