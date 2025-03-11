import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagementComponent } from './product-management.component';
import { provideRouter } from '@angular/router';
import { ProductConditions } from '../../types/product-conditions';

fdescribe('ProductManagementComponent', () => {
  let component: ProductManagementComponent;
  let fixture: ComponentFixture<ProductManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductManagementComponent],
      providers: [provideRouter([{ path: 'productmanagement', component: ProductManagementComponent }])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset data on button click', () => {
    const resetAge: HTMLElement = fixture.nativeElement.querySelector('#resetAge');
    const resetIncome: HTMLElement = fixture.nativeElement.querySelector('#resetIncome');
    const resetStudent: HTMLElement = fixture.nativeElement.querySelector('#resetStudent');

    component.product.get(['age', 'min'])?.setValue('8');
    expect(component.product.get(['age', 'min'])?.value).toEqual('8');
    resetAge.click();
    expect(component.product.get(['age', 'min'])?.value).toEqual('');

    component.product.get(['income', 'min'])?.setValue('1000');
    component.product.get(['income', 'max'])?.setValue('10000');
    expect(component.product.get(['income', 'min'])?.value).toEqual('1000');
    expect(component.product.get(['income', 'max'])?.value).toEqual('10000');
    resetIncome.click();
    expect(component.product.get(['income', 'min'])?.value).toEqual('');
    expect(component.product.get(['income', 'max'])?.value).toEqual('');
    
    component.product.get('isStudent')?.setValue('yes');
    expect(component.product.get('isStudent')?.value).toEqual('yes');
    resetStudent.click();
    expect(component.product.get('isStudent')?.value).toEqual('');
  });

  it('should send correct product to backend', () => {
    const addProduct: HTMLElement = fixture.nativeElement.querySelector('#submitProduct');

    component.product.get(['age', 'min'])?.setValue('5');
    component.product.get(['age', 'max'])?.setValue('50');
    component.product.get(['age', 'maxInclusive'])?.setValue(true);
    addProduct.click();
    const product1: ProductConditions = { minAge: 5.001, maxAge: 50 };
    expect(component.productToSend).toEqual(product1);

    component.resetAge();

  });
});
