"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOfProducts = void 0;
exports.listOfProducts = [
    { name: 'Current Account', minAge: 17.001, maxAge: Infinity, minIncome: 0.001, maxIncome: Infinity },
    { name: 'Current Account Plus', minAge: 17.001, maxAge: Infinity, minIncome: 40000.001, maxIncome: Infinity },
    { name: 'Junior Saver Account', minAge: 0, maxAge: 17.999 },
    { name: 'Student Account', minAge: 17.001, maxAge: Infinity, isStudent: true },
    { name: 'Senior Account', minAge: 65, maxAge: Infinity },
    { name: 'Debit Card', minAge: 17.001, maxAge: Infinity, minIncome: 0, maxIncome: 12000.999 },
    { name: 'Credit Card', minAge: 17.001, maxAge: Infinity, minIncome: 12000.001, maxIncome: Infinity },
    { name: 'Gold Credit Card', minAge: 17.001, maxAge: Infinity, minIncome: 40000.001, maxIncome: Infinity },
];
/*
Current Account: Income > 0 & Age > 17
Current Account Plus: Income > 40000 & Age > 17
Junior Saver Account: Age < 18
Student Account: Student = Yes & Age > 17
Senior Account: Age >= 65
Debit Card: Income < 12001 & Age > 17
Credit Card: Income > 12000 & Age > 17
Gold Credit Card: Income > 40000 & Age > 17
*/ 
