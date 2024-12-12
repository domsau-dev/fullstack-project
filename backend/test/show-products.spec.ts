import { ProductConditions } from '../src/product-conditions';
import { showProducts } from '../src/show-products';

describe('showProducts', () => {
    it('should filter correct products', () => {
        const answer1: ProductConditions = {
            minAge: 0,
            maxAge: 17,
            minIncome: 0,
            maxIncome: Infinity,
            isStudent: true
        };
        const products1: string[] = ['Junior Saver Account'];

        const answer2: ProductConditions = {
            minAge: 18,
            maxAge: 65,
            minIncome: 1,
            maxIncome: Infinity,
            isStudent: true
        };
        const products2: string[] = ['Student Account', 'Current Account'];

        const answer3: ProductConditions = {
            minAge: 0,
            maxAge: Infinity,
            minIncome: 0,
            maxIncome: Infinity,
            isStudent: true
        };
        const products3: string[] = [];

        const answer4: ProductConditions = {
            minAge: 18,
            maxAge: 65,
            minIncome: 0,
            maxIncome: 12000,
            isStudent: false
        };
        const products4: string[] = ['Debit Card'];

        const answer5: ProductConditions = {
            minAge: 18,
            maxAge: 65,
            minIncome: 0,
            maxIncome: 12000,
            isStudent: true
        };
        const products5: string[] = ['Debit Card', 'Student Account'];

        const answer6: ProductConditions = {
            minAge: 65,
            maxAge: 70,
            minIncome: 12001,
            maxIncome: 100000,
            isStudent: true
        };
        const products6: string[] = ['Credit Card', 'Student Account', 'Senior Account', 'Current Account'];

        const answer7: ProductConditions = {
            minAge: 65,
            maxAge: 70,
            minIncome: 40001,
            maxIncome: Infinity,
            isStudent: true
        };
        const products7: string[] = ['Credit Card', 'Student Account', 'Senior Account', 'Current Account', 'Current Account Plus', 'Gold Credit Card'];

        expect(showProducts(answer1)).toEqual(products1);
        expect(showProducts(answer2).sort()).toEqual(products2.sort());
        expect(showProducts(answer3)).toEqual(products3);
        expect(showProducts(answer4)).toEqual(products4);
        expect(showProducts(answer5).sort()).toEqual(products5.sort());
        expect(showProducts(answer6).sort()).toEqual(products6.sort());
        expect(showProducts(answer7).sort()).toEqual(products7.sort());
    });
});