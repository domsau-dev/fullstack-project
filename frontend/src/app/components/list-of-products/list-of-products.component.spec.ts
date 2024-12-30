import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfProductsComponent } from './list-of-products.component';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('ListOfProductsComponent', () => {
  let component: ListOfProductsComponent;
  let fixture: ComponentFixture<ListOfProductsComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  const spy = jasmine.createSpyObj('ApiService', ['getProducts']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfProductsComponent],
      providers: [{ provide: ApiService, useValue: spy }, provideHttpClient(), provideHttpClientTesting(), provideRouter([{ path: 'recommendations', component: ListOfProductsComponent }])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListOfProductsComponent);
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    component = fixture.componentInstance;

  });

  it('should create', () => {
    const products: string[] = [];
    apiServiceSpy.getProducts.and.returnValue(of(products));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should get products from ApiService', () => {
    const products: string[] = ['item 1', 'item 2', 'item 3'];

    apiServiceSpy.getProducts.and.returnValue(of(products));
    fixture.detectChanges();
    component.products$.subscribe((value) => {
      expect(value).toBe(products);
    });
  });

  it('should render products', () => {
    const products: string[] = ['item 1', 'item 2', 'item 3'];
    apiServiceSpy.getProducts.and.returnValue(of(products));
    fixture.detectChanges();

    const renderedProducts: HTMLElement[] = fixture.nativeElement.querySelectorAll('.product');
    expect(renderedProducts[0].innerText).toBe('item 1');
    expect(renderedProducts[1].innerText).toBe('item 2');
    expect(renderedProducts[2].innerText).toBe('item 3');
  });
});
