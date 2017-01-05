import contactRoutes from '../api/contact';
import userRoutes from '../api/user';
import diseaseRoutes from '../api/disease';
import diseaseDefinitionRoutes from '../api/disease/definition';

export default (app) => {
  app.use('/api/contact', contactRoutes);
  app.use('/api/user', userRoutes);
  app.use('/api/disease', diseaseRoutes);
  app.use('/api/disease/definition', diseaseDefinitionRoutes);
}
