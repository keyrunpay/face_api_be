import { CustomError } from './custom.error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;

  serializeErrors() {
    return { message: 'Database connection failed.' };
  }

  constructor() {
    super('Database connection failed');
  }
}
