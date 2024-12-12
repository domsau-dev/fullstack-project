"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProducts = showProducts;
const list_of_products_1 = require("./list-of-products");
function showProducts(comparableAnswers) {
    let productsToShow = [];
    for (const product of list_of_products_1.listOfProducts) {
        let ageCondition = false, studentCondition = false, incomeCondition = false;
        if (!product.minAge && !product.maxAge) {
            ageCondition = true;
        }
        else if ((product.minAge <= comparableAnswers.minAge) && (product.maxAge >= comparableAnswers.maxAge)) {
            ageCondition = true;
        }
        if (product.isStudent === undefined) {
            studentCondition = true;
        }
        else if (product.isStudent === comparableAnswers.isStudent) {
            studentCondition = true;
        }
        if (!product.minIncome && !product.maxIncome) {
            incomeCondition = true;
        }
        else if ((product.minIncome <= comparableAnswers.minIncome) && (product.maxIncome >= comparableAnswers.maxIncome)) {
            incomeCondition = true;
        }
        if (ageCondition && studentCondition && incomeCondition) {
            productsToShow.push(product.name);
        }
    }
    return productsToShow;
}
