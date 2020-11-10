import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  hide: boolean;
  show: boolean;
  incrementId: number;
  question: any;
  answers: any;
  yourAnswer: number = -1;
  end: boolean;
  results: number[] = [];
  score: number = 0;
  numberOfQuestion: number;
  checkResults: boolean;
  id: number = 0;
  wrong: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  startQuiz(): void {
    this.incrementId = 0;
    this.hide = true;
    this.setQuestion();
  }

  setQuestion(): void {
    this.dataService.getData().subscribe(
      (response: Array<any>) => { 
        this.question = response[this.incrementId].question;
        this.answers = response[this.incrementId].answers;
        response.length > this.incrementId + 1 ? this.end = false : this.end = true;
        this.numberOfQuestion = response.length;
        if(this.checkResults) {
          this.wrong = this.results[this.id];
          this.id++;
        }
      }
    );
  }

  nextQuestion(): void {
      if(!this.end) {
        this.incrementId++;
        this.setQuestion();
        this.checkAnswers();
        this.clearState();
      } else {
        this.checkAnswers();
        this.show = true;
        console.log(this.results);
      }
  } 
    
  clearState() {
    this.yourAnswer = -1;
  }

  clickedAnswer(i: number): void {
    this.yourAnswer = i;
  }

  checkAnswers() {
    if(this.yourAnswer > -1 && this.answers[this.yourAnswer].correct) {
      this.score++;
    }
    this.results.push(this.yourAnswer);
  }

  showAnswers() {
    this.checkResults = true;
    this.show = false;
    this.question = undefined;
    this.answers = undefined;
    this.clearState(); 
    this.startQuiz();
  }

  exit() {
    this.hide = false;
    this.results = [];
    this.show = false;
    this.score = 0;
    this.id = 0;
    this.question = undefined;
    this.answers = undefined;
    this.clearState(); 
    this.checkResults = false;
  }

}
