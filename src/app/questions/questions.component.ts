import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './../questions.service';
import { Router,ActivatedRoute } from '@angular/router';
import { QuestionModel } from './../questionModel';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question: QuestionModel;
  values = '';
  onKey(event: any) { // without type info
    this.values = event.target.value ;
  } 
  constructor( private QuestionsService: QuestionsService,
    private router: Router ,private route: ActivatedRoute
) { }

  ngOnInit() {
  }
  AddMyQuestion(values) {
    this.QuestionsService.addquestion(values);
    this.router.navigate(['']);
  }
  
}