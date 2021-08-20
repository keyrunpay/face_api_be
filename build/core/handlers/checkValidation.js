"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validation_error_1 = require("./validation.error");
exports.default = (req, _res, next) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        next(new validation_error_1.RequestValidationError(errors.array()));
    }
    else {
        next();
    }
};
