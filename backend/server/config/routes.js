import userRoutes from '../api/user';
import snippetRoutes from '../api/snippet';
import diseaseRoutes from '../api/disease';

export default (app) => {
  app.use('/api/user', userRoutes);
  app.use('/api/snippet', snippetRoutes);
  app.use('/api/disease', diseaseRoutes);
}
