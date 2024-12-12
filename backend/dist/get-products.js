"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = getProducts;
const parse_answers_1 = require("./parse-answers");
const show_products_1 = require("./show-products");
function getProducts(answers) {
    const comparableAnswers = (0, parse_answers_1.parseAnswers)(answers);
    return (0, show_products_1.showProducts)(comparableAnswers);
}
