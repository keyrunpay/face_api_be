import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import config from './core/config';

mongoose.connection.once('open', () => {
  console.log('MongoDB Connected.');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB Connection Error: ' + err.message);
});

mongoose.connect(config.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

import './core/loaders/models';
import app from './app';

app.listen(config.PORT, () => {
  console.log('Server Listening on: ' + config.PORT);
});
