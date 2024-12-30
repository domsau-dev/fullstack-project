import { getProducts } from '../src/get-products';
import { Answers } from '../src/types/answers';

describe('getProducts', () => {
  it('should get correct products', () => {

    const answer1: Answers = {
      ageRange: '0-17',
      incomeRange: '0+',
      isStudent: 'yes'
    };
    const products1: string[] = ['Junior Saver Account'];

    const answer2: Answers = {
      ageRange: '18-65',
      incomeRange: '1+',
      isStudent: 'yes'
    };
    const products2: string[] = ['Student Account', 'Current Account'];

    const answer3: Answers = {
      ageRange: '0+',
      incomeRange: '0+',
      isStudent: 'yes'
    };
    const products3: string[] = [];

    const answer4: Answers = {
      ageRange: '18-65',
      incomeRange: '0-12000',
      isStudent: 'no'
    };
    const products4: string[] = ['Debit Card'];

    const answer5: Answers = {
      ageRange: '18-65',
      incomeRange: '0-12000',
      isStudent: 'yes'
    };
    const products5: string[] = ['Debit Card', 'Student Account'];

    const answer6: Answers = {
      ageRange: '65-70',
      incomeRange: '12001-100000',
      isStudent: 'yes'
    };
    const products6: string[] = ['Credit Card', 'Student Account', 'Senior Account', 'Current Account'];

    const answer7: Answers = {
      ageRange: '65-70',
      incomeRange: '40001+',
      isStudent: 'yes'
    };
    const products7: string[] = ['Credit Card', 'Student Account', 'Senior Account', 'Current Account', 'Current Account Plus', 'Gold Credit Card'];

    expect(getProducts(answer1.ageRange, answer1.incomeRange, answer1.isStudent)).toEqual(products1);
    expect(getProducts(answer2.ageRange, answer2.incomeRange, answer2.isStudent).sort()).toEqual(products2.sort());
    expect(getProducts(answer3.ageRange, answer3.incomeRange, answer3.isStudent)).toEqual(products3);
    expect(getProducts(answer4.ageRange, answer4.incomeRange, answer4.isStudent)).toEqual(products4);
    expect(getProducts(answer5.ageRange, answer5.incomeRange, answer5.isStudent).sort()).toEqual(products5.sort());
    expect(getProducts(answer6.ageRange, answer6.incomeRange, answer6.isStudent).sort()).toEqual(products6.sort());
    expect(getProducts(answer7.ageRange, answer7.incomeRange, answer7.isStudent).sort()).toEqual(products7.sort());
  });
});

/* const answer1: ProductConditions = {
  minAge: 0,
  maxAge: 17,
  minIncome: 0,
  maxIncome: Infinity,
  isStudent: true
};

const answer2: ProductConditions = {
  minAge: 18,
  maxAge: 65,
  minIncome: 1,
  maxIncome: Infinity,
  isStudent: true
};

const answer3: ProductConditions = {
  minAge: 0,
  maxAge: Infinity,
  minIncome: 0,
  maxIncome: Infinity,
  isStudent: true
};

const answer4: ProductConditions = {
  minAge: 18,
  maxAge: 65,
  minIncome: 0,
  maxIncome: 12000,
  isStudent: false
};

const answer5: ProductConditions = {
  minAge: 18,
  maxAge: 65,
  minIncome: 0,
  maxIncome: 12000,
  isStudent: true
};

const answer6: ProductConditions = {
  minAge: 65,
  maxAge: 70,
  minIncome: 12001,
  maxIncome: 100000,
  isStudent: true
};

const answer7: ProductConditions = {
  minAge: 65,
  maxAge: 70,
  minIncome: 40001,
  maxIncome: Infinity,
  isStudent: true
}; */