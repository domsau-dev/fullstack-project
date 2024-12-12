"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHandler = void 0;
const get_products_1 = require("./get-products");
const getHandler = (req, res) => {
    if (req.query.ageRange && req.query.incomeRange && req.query.isStudent) {
        try {
            const toSend = (0, get_products_1.getProducts)({ ageRange: req.query.ageRange, incomeRange: req.query.incomeRange, isStudent: req.query.isStudent });
            res.json(toSend);
        }
        catch (_a) {
            res.status(400).send('Wrong query');
        }
    }
    else {
        res.status(400).send('Wrong query');
    }
};
exports.getHandler = getHandler;
