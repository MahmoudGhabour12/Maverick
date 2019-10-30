import { QuestionModel } from './questionModel';
import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  APIURL = 'http://localhost:3000/questions';

  constructor(private http: HttpClient) { }

  getquestion() {
    return this.http.get<QuestionModel[]>(this.APIURL );
  }

  addquestion(question: QuestionModel) {
    return this.http.post(this.APIURL , question).subscribe();
  }}
