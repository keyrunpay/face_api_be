"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = void 0;
const custom_error_1 = require("./custom.error");
class AuthorizationError extends custom_error_1.CustomError {
    constructor() {
        super('Authorization failure!');
        this.statusCode = 401;
    }
    serializeErrors() {
        return { message: 'Forbidden 🚫🚫' };
    }
}
exports.AuthorizationError = AuthorizationError;
