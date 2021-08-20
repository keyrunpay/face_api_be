"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
require("express-async-errors");
const config_1 = __importDefault(require("./core/config"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./core/handlers/errorHandler");
const routes_1 = __importDefault(require("./core/loaders/routes"));
const app = express_1.default();
app.use(express_1.json());
app.use(express_1.urlencoded({ extended: true }));
//Allow CORS
app.use(cors_1.default());
app.use(config_1.default.ENDPOINT_PREFIX, routes_1.default());
app.use(errorHandler_1.errorHandler);
exports.default = app;
