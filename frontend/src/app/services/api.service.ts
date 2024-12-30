import { Injectable } from '@angular/core';
import { Answers } from '../types/answers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  answers!: Answers;

  sendData(answers: Answers) {
    this.answers = answers;
  }

  getProducts(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/', {
      params:
      {
        ageRange: this.answers.ageRange,
        isStudent: this.answers.isStudent,
        incomeRange: this.answers.incomeRange
      }
    });
  }
}
