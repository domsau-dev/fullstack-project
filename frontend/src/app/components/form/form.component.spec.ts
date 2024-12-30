import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
      providers: [provideHttpClient(), provideRouter([{ path: '', component: FormComponent }])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct property values', () => {
    const fakeQuestions = { age: '', student: '', income: '' };

    expect(component.isClicked).toEqual(false);
    expect(component.dataToSend).toEqual([]);
    expect(component.questions.value).toEqual(fakeQuestions);
  });

  it('should change form value on button click', () => {
    const buttonAge0_17: HTMLElement = fixture.nativeElement.querySelector('#id-0-17');
    const buttonStudentNo: HTMLElement = fixture.nativeElement.querySelector('#no');
    const buttonIncome12001_40000: HTMLElement = fixture.nativeElement.querySelector('#id-12001-40000');

    buttonAge0_17.click();
    buttonIncome12001_40000.click();
    buttonStudentNo.click();

    expect(component.questions.value.age).toBe('0-17');
    expect(component.questions.value.student).toBe('no');
    expect(component.questions.value.income).toBe('12001-40000');
    expect(component.questions.valid).toBe(true);
  });

  it('should not validate form until all questions are answered', () => {
    const buttonAge0_17: HTMLElement = fixture.nativeElement.querySelector('#id-0-17');
    const buttonStudentNo: HTMLElement = fixture.nativeElement.querySelector('#no');

    buttonAge0_17.click();
    buttonStudentNo.click();

    expect(component.questions.valid).toBe(false);
  });

  it('should show error message for unanswered questions when trying to get recommendations', () => {

    const buttonStudentYes: HTMLElement = fixture.nativeElement.querySelector('#yes');

    const buttonGetRecommendations: HTMLElement = fixture.nativeElement.querySelector('.btn');

    const errormessages: HTMLElement[] = fixture.nativeElement.querySelectorAll('.error-message');
    buttonStudentYes.click();
    buttonGetRecommendations.click();
    fixture.detectChanges();

    expect(errormessages[0].hasAttribute('hidden')).toBe(false);
  })
});
