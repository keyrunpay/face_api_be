import express, { json, urlencoded } from 'express';
import 'express-async-errors';
import config from './core/config';
import cors from 'cors';
import { errorHandler } from './core/handlers/errorHandler';
import routes from './core/loaders/routes';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

//Allow CORS
app.use(cors());

app.use(config.ENDPOINT_PREFIX, routes());

app.use(errorHandler);

export default app;
