import { Injectable } from '@angular/core';
import { QuizModel } from './quizModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  APIURL = 'http://localhost:3000/quiz';

  constructor(private http: HttpClient) { }

  getQuiz() {
    return this.http.get<QuizModel[]>(this.APIURL );
  }

  addQuiz(quiz: QuizModel) {
    return this.http.post(this.APIURL , quiz).subscribe();
  }

}
