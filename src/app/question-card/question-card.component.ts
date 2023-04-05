import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Answer, Question} from "../_model/question";

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {
  selectedAnswer: Answer[] = [];
  @Output() previousQuestionEvent = new EventEmitter();
  @Output() nextQuestionEvent = new EventEmitter<any>();
  @Input() question: Question;

  onPrevious(): void {
    this.previousQuestionEvent.emit();
    this.selectedAnswer = [];
  }

  onNext(): void {
    this.nextQuestionEvent.emit(this.selectedAnswer);
    // console.log(this.selectedAnswer)
    this.selectedAnswer = [];
  }

  toggleMovieGenre(genre: Answer): void {
    let index = this.getIndexOf(genre);
    if(index > -1)
      this.selectedAnswer.splice(index,1);
    else
      this.selectedAnswer.push(genre);
  }

  getIndexOf(genre: Answer): number {

    return this.selectedAnswer.indexOf(genre);
  }

}
