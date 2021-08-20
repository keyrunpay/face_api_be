"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldError = void 0;
const custom_error_1 = require("./custom.error");
class FieldError extends custom_error_1.CustomError {
    constructor(err) {
        super(err);
        this.statusCode = 401;
        this.errObj = err;
    }
    serializeErrors() {
        return { fields: this.errObj };
    }
}
exports.FieldError = FieldError;
