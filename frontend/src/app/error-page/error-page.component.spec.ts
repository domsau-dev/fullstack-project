import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;
  let router: Router;
  let harness: RouterTestingHarness;
  let compHarness: ErrorPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorPageComponent],
      providers: [provideRouter([{ path:'**', component: ErrorPageComponent }])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    harness = await RouterTestingHarness.create();
    compHarness = await harness.navigateByUrl('**', ErrorPageComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return to homepage after clicking a button', fakeAsync( () => {
    const button: HTMLElement = harness.routeNativeElement!.querySelector('a') as HTMLElement;
    button.click();
    tick();
    expect(router.url).toBe('/');
  }));
});
