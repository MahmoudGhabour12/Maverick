import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './quiz/quiz.component';
 import { QuestionsComponent } from './questions/questions.component';
 import { ParaComponent } from './para/para.component';
import { UrlComponent } from './url/url.component';
 
const routes: Routes = [
  {path: 'quiz', component: QuizComponent, pathMatch: 'full'},
   {path: '', component: HomeComponent, pathMatch: 'full'},

  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'questions', component: QuestionsComponent, pathMatch: 'full'},
  {path: 'url', component: UrlComponent, pathMatch: 'full'},
  {path: 'para', component: ParaComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
