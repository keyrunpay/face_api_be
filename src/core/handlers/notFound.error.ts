import { CustomError } from './custom.error';

export class NotFoundError extends CustomError {
  statusCode = 404;

  serializeErrors() {
    return { message: 'Requested object not found!' };
  }

  constructor() {
    super('Requested object not found!');
  }
}
