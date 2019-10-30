import { Component, OnInit } from '@angular/core';
import { QuizService} from './../quiz.service';
import { QuizModel } from './../quizModel';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: QuizModel;
  values = '';
  span="";
  Textare="";
  onKey(event: any) { // without type info
    this.values = event.target.value ;
  } 
  Key(event: any) { // without type info
    this.span = event.target.value ;
  }
  Textarea(event: any) { // without type info
    this.Textare = event.target.value ;
  } 
  

/*image upload*/ 
  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

   
  constructor( private QuizService: QuizService,
    private route: ActivatedRoute,private router: Router
) { }

  ngOnInit() {
  }
  AddQuiz(values) {
    this.QuizService.addQuiz(values);
    this.router.navigate(['']);
  }  
}
