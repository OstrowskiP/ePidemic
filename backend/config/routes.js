import userRoutes from '../api/user';
import diseaseRoutes from '../api/disease';

export default (app) => {
  app.use('/api/user', userRoutes);
  app.use('/api/disease', diseaseRoutes);
}
