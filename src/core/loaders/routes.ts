import { Router } from 'express';
import faceRoute from '../../features/face/face.routes';


const app = Router();

// Register all routes here
export default () => {
  app.use('/face', faceRoute);
  return app;
};
