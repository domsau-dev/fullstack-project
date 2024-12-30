import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  constructor(private apiService: ApiService) { }

  questions = new FormGroup({
    age: new FormControl('', Validators.required),
    student: new FormControl('', Validators.required),
    income: new FormControl('', Validators.required),
  });

  isClicked: boolean = false;
  dataToSend: string[] = [];

  submitFunc() {
    this.isClicked = true;
    if (this.questions.valid) {
      this.apiService.sendData({
        ageRange: this.questions.value.age as string,
        isStudent: this.questions.value.student as string,
        incomeRange: this.questions.value.income as string,
      });
    }
  }
}
