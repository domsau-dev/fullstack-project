import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductConditions } from '../../types/product-conditions';
import { correctRangeValidator } from '../../validators/correct-range.validator';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, JsonPipe],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent {
  isClicked: boolean = false;
  productToSend: ProductConditions = {};

  product = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormGroup({
      min: new FormControl('', Validators.pattern('^[0-9]*$')),
      minInclusive: new FormControl(false),
      max: new FormControl('', Validators.pattern('^[0-9]*$')),
      maxInclusive: new FormControl(false),
    }, { validators: correctRangeValidator }),
    income: new FormGroup({
      min: new FormControl('', Validators.pattern('^[0-9]*$')),
      minInclusive: new FormControl(false),
      max: new FormControl('', Validators.pattern('^[0-9]*$')),
      maxInclusive: new FormControl(false),
    }, { validators: correctRangeValidator }),
    isStudent: new FormControl(''),
  });

  resetAge() {
    this.product.get('age')?.reset({min: '', minInclusive: false, max: '', maxInclusive: false});
  }

  resetIncome() {
    this.product.get('income')?.reset({min: '', minInclusive: false, max: '', maxInclusive: false});
  }

  resetStudent() {
    this.product.get('isStudent')?.reset('');
  }

  disableLetters(e: KeyboardEvent) {
    if ((e.target as HTMLInputElement).type === "number" && !e.key.match('^[0-9]+$')) {
      e.preventDefault();
    }
  }

  submitProduct() {
    this.isClicked = true;

    if (this.product.valid || !this.product.valid) {
      
      // const properties = [{ range: 'ageRange' as 'ageRange', minRange: 'minAge' as 'minAge', maxRange: 'maxAge' as 'maxAge' },
      //   { range: 'incomeRange' as 'incomeRange', minRange: 'minIncome' as 'minIncome', maxRange: 'maxIncome' as 'maxIncome' }];
      
      //   comparableAnswers.isStudent = answers.isStudent === 'yes' ? true : false;
      
      //   for (const property of properties) {
      //     if (answers[property.range].endsWith('+')) {

      // if (this.product.value.age?.min !== '' && this.product.get('age')?.value.minInclusive) {
      //   realMinAge = Number(this.product.value.age?.min);
      // } else {
      //   realMinAge = Number(this.product.value.age?.min) + 0.001;
      // }

      this.productToSend.name = this.product.value.name!;

      if (this.product.value.isStudent === 'yes') {
        this.productToSend.isStudent = true;
      } else if (this.product.value.isStudent === 'no') {
        this.productToSend.isStudent = false;
      } else {
        this.productToSend.isStudent = undefined;
      }

      const properties = [{ subControl: 'age' as 'age', minOrMax: 'min' as 'min', inclusive: 'minInclusive' as 'minInclusive', productProperty: 'minAge' as 'minAge' },
      { subControl: 'age' as 'age', minOrMax: 'max' as 'max', inclusive: 'maxInclusive' as 'maxInclusive', productProperty: 'maxAge' as 'maxAge' },
      { subControl: 'income' as 'income', minOrMax: 'min' as 'min', inclusive: 'minInclusive' as 'minInclusive', productProperty: 'minIncome' as 'minIncome' },
      { subControl: 'income' as 'income', minOrMax: 'max' as 'max', inclusive: 'maxInclusive' as 'maxInclusive', productProperty: 'maxIncome' as 'maxIncome' },
      ];

      for (const property of properties) {
        if (this.product.value[property.subControl]![property.minOrMax] !== '') {
          if (this.product.value[property.subControl]![property.inclusive]) {
            this.productToSend[property.productProperty] = Number(this.product.value[property.subControl]![property.minOrMax]);
          } else if (property.minOrMax === 'min') {
            this.productToSend[property.productProperty] = Number(this.product.value[property.subControl]![property.minOrMax]) + 0.001;
          } else {
            this.productToSend[property.productProperty] = Number(this.product.value[property.subControl]![property.minOrMax]) - 0.001;
          }
        }
      }

      const properties1 = [{subControl: 'age' as 'age', minProperty: 'minAge' as 'minAge', maxProperty: 'maxAge' as 'maxAge'},
        {subControl: 'income' as 'income', minProperty: 'minIncome' as 'minIncome', maxProperty: 'maxIncome' as 'maxIncome'},
      ];
      for (const property of properties1) {
        if (this.product.value[property.subControl]?.min !== '' && this.product.value[property.subControl]?.max === '') {
          this.productToSend[property.maxProperty] = Infinity;
        } else if (this.product.value[property.subControl]?.min === '' && this.product.value[property.subControl]?.max !== '') {
          this.productToSend[property.minProperty] = 0;
        }
      }
    }
    this.resetAge();
    this.resetIncome();
    this.resetStudent();
  }
}
