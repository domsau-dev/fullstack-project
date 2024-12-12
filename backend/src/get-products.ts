import { Answers } from './answers';
import { parseAnswers } from './parse-answers';
import { ProductConditions } from './product-conditions';
import { showProducts } from './show-products';

export function getProducts(answers: Answers): string[] {
    const comparableAnswers: ProductConditions = parseAnswers(answers);
    return showProducts(comparableAnswers);
}