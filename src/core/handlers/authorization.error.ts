import { CustomError } from './custom.error';

export class AuthorizationError extends CustomError {
  statusCode = 401;

  serializeErrors() {
    return { message: 'Forbidden 🚫🚫' };
  }

  constructor() {
    super('Authorization failure!');
  }
}
