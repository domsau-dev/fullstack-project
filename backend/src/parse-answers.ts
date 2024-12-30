import { Answers } from './types/answers';
import { ProductConditions } from './types/product-conditions';

export function parseAnswers(answers: Answers): ProductConditions {
  let comparableAnswers: ProductConditions = {};
  const properties = [{ range: 'ageRange' as 'ageRange', minRange: 'minAge' as 'minAge', maxRange: 'maxAge' as 'maxAge' },
  { range: 'incomeRange' as 'incomeRange', minRange: 'minIncome' as 'minIncome', maxRange: 'maxIncome' as 'maxIncome' }];

  comparableAnswers.isStudent = answers.isStudent === 'yes' ? true : false;

  for (const property of properties) {
    if (answers[property.range].endsWith('+')) {
      const beforePlus = answers[property.range].slice(0, answers[property.range].length - 1);
      if (!isNaN(Number(beforePlus))) {
        comparableAnswers[property.minRange] = Number(beforePlus);
        comparableAnswers[property.maxRange] = Infinity;
      } else {
        throw new Error('Not a valid input');
      }
    } else if (answers[property.range].includes('-') && !(answers[property.range].startsWith('-')) && !(answers[property.range].endsWith('-'))) {
      const splitNumbers = answers[property.range].split('-');
      if (splitNumbers.length === 2 && !isNaN(Number(splitNumbers[0])) && !isNaN(Number(splitNumbers[1]))) {
        [comparableAnswers[property.minRange], comparableAnswers[property.maxRange]] = splitNumbers.map(Number);
      } else {
        throw new Error('Not a valid input');
      }
    } else if (!isNaN(Number(answers[property.range]))) {
      comparableAnswers[property.minRange] = comparableAnswers[property.maxRange] = Number(answers[property.range]);
    } else {
      throw new Error('Not a valid input');
    }
  }

  if (comparableAnswers.minAge! > comparableAnswers.maxAge! || comparableAnswers.minIncome! > comparableAnswers.maxIncome!) {
    throw new Error('Minimum age or income cannot be higher than maximum age or income');
  }

  return comparableAnswers;
}