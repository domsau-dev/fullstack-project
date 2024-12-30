import { parseAnswers } from './parse-answers';
import { ProductConditions } from './types/product-conditions';
import { listOfProducts } from './data/list-of-products';

export function getProducts(ageRange: string, incomeRange: string, isStudent: 'yes' | 'no'): string[] {
  const answers = { ageRange, incomeRange, isStudent };
  const comparableAnswers: ProductConditions = parseAnswers(answers);
    let productsToShow: string[] = [];
  
    for (const product of listOfProducts) {
      let ageCondition: boolean = false, studentCondition: boolean = false, incomeCondition: boolean = false;
  
      if (!product.minAge && !product.maxAge) {
        ageCondition = true;
      } else if ((product.minAge! <= comparableAnswers.minAge!) && (product.maxAge! >= comparableAnswers.maxAge!)) {
        ageCondition = true;
      }
  
      if (product.isStudent === undefined) {
        studentCondition = true;
      } else if (product.isStudent === comparableAnswers.isStudent) {
        studentCondition = true;
      }
  
      if (!product.minIncome && !product.maxIncome) {
        incomeCondition = true;
      } else if ((product.minIncome! <= comparableAnswers.minIncome!) && (product.maxIncome! >= comparableAnswers.maxIncome!)) {
        incomeCondition = true;
      }
  
      if (ageCondition && studentCondition && incomeCondition) {
        productsToShow.push(product.name!);
      }
    }
  
    return productsToShow;
}