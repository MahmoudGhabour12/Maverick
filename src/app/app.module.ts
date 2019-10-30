import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTabsModule,MatToolbarModule,MatIconModule, MatButtonModule,MatListModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { ParaComponent } from './para/para.component';
import { UrlComponent } from './url/url.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizService } from './quiz.service';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
 
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionsComponent,
    ParaComponent,
    UrlComponent,
    HomeComponent,
    NavComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule, MatSidenavModule,MatToolbarModule,MatIconModule, MatButtonModule,MatListModule

  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
