"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const face_routes_1 = __importDefault(require("../../features/face/face.routes"));
const app = express_1.Router();
// Register all routes here
exports.default = () => {
    app.use('/face', face_routes_1.default);
    return app;
};
