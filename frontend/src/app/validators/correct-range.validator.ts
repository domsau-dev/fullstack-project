import { AbstractControl } from '@angular/forms';

/* export function correctRangeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const min = control.get('min')?.value;
      const max = control.get('max')?.value;
      // return (parseInt(min) > parseInt(max)) ? {correctRange: true} : null;
      return control.value == 'abc' ? {correctRange: true} : null;
    };
  } */

    export function correctRangeValidator(control: AbstractControl) {
      const min = control.get('min')?.value;
      const max = control.get('max')?.value;
      return (parseInt(min) > parseInt(max)) ? {correctRange: true} : null;
    }