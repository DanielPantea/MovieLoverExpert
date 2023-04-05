import {Component, OnInit} from '@angular/core';
import { QuestionService} from "./_service/question.service";
import {Answer} from "./_model/question";
import { Observable, throwError } from 'rxjs';
import { Subscription } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MovieLoverExpert';
  recommendedMovie: string;
  questionIndex: number;
  facts: string[];

  constructor(
    public questionService: QuestionService,
  ) { }

  ngOnInit(): void {

    this.questionService.initializeQuestions();

    this.questionIndex = -1;
    this.facts = [];
    this.recommendedMovie = "";
  }

  startQuestions(): void {

    this.questionIndex = 0;
  }

  onNextQuestion(answers: any): void {

    if(answers instanceof Array)
      answers.forEach(a => this.facts.push(a.value));
    else if (answers.value != "")
      this.facts.push(answers.value)


    // console.log("facts: " + JSON.stringify(this.facts));

    this.questionIndex++;

    if(this.questionIndex == 8)
      this.getRecommendedMovie();

  }

  onPreviousQuestion(): void {

    this.questionIndex--;

    let answers = this.questionService.questions[this.questionIndex].answers;
    answers.forEach(a => {
      let index = this.facts.indexOf(a.value);
      if(index > -1)
        this.facts.splice(index,1);
    })

    // console.log("facts: " + JSON.stringify(this.facts));
  }

  getRecommendedMovie(): void {

    this.questionService.getRecommendedMovie(this.facts).subscribe(
      (movie: string) => {
        this.recommendedMovie = movie.toString();
        this.questionIndex = -1;
      },
      (error) => console.log(error)
    );;
  }

}
