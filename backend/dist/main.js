"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const get_handler_1 = require("./get-handler");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (0, cors_1.default)({ origin: 'http://localhost:4200' }), get_handler_1.getHandler);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
