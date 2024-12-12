import { Answers } from '../src/answers';
import { parseAnswers } from '../src/parse-answers';
import { ProductConditions } from '../src/product-conditions';

describe('parseAnswers', () => {
    it('should change form input into a correct format', () => {
        const answer1: Answers = {
            ageRange: '0-17',
            incomeRange: '0-5000',
            isStudent: 'yes'
        };
        const comparableAnswer1: ProductConditions = {
            minAge: 0,
            maxAge: 17,
            minIncome: 0,
            maxIncome: 5000,
            isStudent: true
        };

        const answer2: Answers = {
            ageRange: '9',
            incomeRange: '100+',
            isStudent: 'no'
        };
        const comparableAnswer2: ProductConditions = {
            minAge: 9,
            maxAge: 9,
            minIncome: 100,
            maxIncome: Infinity,
            isStudent: false
        };

        const answer3: Answers = {
            ageRange: '0-3',
            incomeRange: '0',
            isStudent: 'no'
        };
        const comparableAnswer3: ProductConditions = {
            minAge: 0,
            maxAge: 3,
            minIncome: 0,
            maxIncome: 0,
            isStudent: false
        };

        expect(parseAnswers(answer1)).toEqual(comparableAnswer1);
        expect(parseAnswers(answer2)).toEqual(comparableAnswer2);
        expect(parseAnswers(answer3)).toEqual(comparableAnswer3);
    });

    it('should throw error on wrong range', () => {
        const wrongAnswer1: Answers = {
            ageRange: '20-17',
            incomeRange: '0-5000',
            isStudent: 'yes'
        };

        const wrongAnswer2: Answers = {
            ageRange: '0-17',
            incomeRange: '10000-500',
            isStudent: 'yes'
        };

        const wrongAnswer3: Answers = {
            ageRange: '200-0',
            incomeRange: '5000-0',
            isStudent: 'yes'
        };

        const wrongAnswers: Answers[] = [wrongAnswer1, wrongAnswer2, wrongAnswer3];

        for (const wrongAnswer of wrongAnswers) {
            expect(() => {
                parseAnswers(wrongAnswer);
            }).toThrow(new Error('Minimum age or income cannot be higher than maximum age or income'));
        }
    });

    it('should throw error on wrong input format', () => {
        const wrongAnswer1: Answers = {
            ageRange: 'ashuias',
            incomeRange: '0-5000',
            isStudent: 'yes'
        };
        
        const wrongAnswer2: Answers = {
            ageRange: '20-24-25',
            incomeRange: '0-5000',
            isStudent: 'yes'
        };

        const wrongAnswer3: Answers = {
            ageRange: '17-20',
            incomeRange: 'a0-5000',
            isStudent: 'yes'
        };

        const wrongAnswer4: Answers = {
            ageRange: '17-20',
            incomeRange: '0-5000f',
            isStudent: 'yes'
        };

        const wrongAnswer5: Answers = {
            ageRange: '20+30',
            incomeRange: '0-5000',
            isStudent: 'yes'
        };

        const wrongAnswer6: Answers = {
            ageRange: '2a0+',
            incomeRange: '0-5000',
            isStudent: 'yes'
        };

        const wrongAnswers: Answers[] = [wrongAnswer1, wrongAnswer2, wrongAnswer3, wrongAnswer4, wrongAnswer5, wrongAnswer6];

        for (const wrongAnswer of wrongAnswers) {
            expect(() => {
                parseAnswers(wrongAnswer);
            }).toThrow(new Error('Not a valid input'));
        }
    });
});