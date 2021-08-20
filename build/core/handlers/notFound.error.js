"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custom_error_1 = require("./custom.error");
class NotFoundError extends custom_error_1.CustomError {
    constructor() {
        super('Requested object not found!');
        this.statusCode = 404;
    }
    serializeErrors() {
        return { message: 'Requested object not found!' };
    }
}
exports.NotFoundError = NotFoundError;
