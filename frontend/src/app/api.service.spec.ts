import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom, Observable } from 'rxjs';
import { Answers } from './answers';

describe('ApiService', () => {
  let service: ApiService;
  let products$: Observable<string[]>;
  let answers: Answers;

  beforeEach(async () => {
    TestBed.configureTestingModule({providers: [provideHttpClient(), provideHttpClientTesting()]});
    service = TestBed.inject(ApiService);

    answers = {
      ageRange: '0-17',
      isStudent: 'no',
      incomeRange: '0',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send answers to service', () => {
    service.sendData(answers);
    expect(service.answers).toBe(answers);
  });

  it('should get http response', async () => {
    const httpTest = TestBed.inject(HttpTestingController);
    const response: string[] = ['item1', 'item2', 'item3'];

    service.sendData(answers);
    products$ = service.getProducts();
    const productsPromise = firstValueFrom(products$);

    const request = httpTest.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/?ageRange=0-17&isStudent=no&incomeRange=0',
    });

    expect(request.request.method).toBe('GET');
    request.flush(response);
    expect(await productsPromise).toEqual(response);
    httpTest.verify();
  })

});
