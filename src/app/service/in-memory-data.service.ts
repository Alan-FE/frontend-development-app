import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const questions = [
      {
        question: 'Which three main languages ​​are used by frontend developers?',
        answers : [
          { answer: 'Java, C and Python', correct: false },
          { answer: 'Html, CSS and JavaScript', correct: true },
          { answer: 'Node.js, Ruby and #C', correct: false },
          { answer: 'Angular, React and Vue.js ', correct: false }
        ]
      },
      {
        question: 'Which framework is written in TypeScript?',
        answers : [
          { answer: 'Angular', correct: true },
          { answer: 'React', correct: false },
          { answer: 'Ember', correct: false },
          { answer: 'Vue.js', correct: false }
        ]
      },
      {
        question: 'What is jQuery?',
        answers : [
          { answer: 'JavaSript library', correct: true },
          { answer: 'Framework', correct: false },
          { answer: 'Web Api', correct: false },
          { answer: 'Css framework', correct: false }
        ]
      },
      {
        question: 'What are less and sass?',
        answers : [
          { answer: 'CSS frameworks', correct: false },
          { answer: 'Preprocessors', correct: true },
          { answer: 'CSS library', correct: false },
          { answer: 'JavaScript library', correct: false }
        ]
      },
      {
        question: 'What is Brackets?',
        answers : [
          { answer: 'Text editor', correct: true },
          { answer: 'CSS framework', correct: false },
          { answer: 'CSS library', correct: false },
          { answer: 'JavaScript library', correct: false }
        ]
      },
      {
        question: 'Who developed Vue JS?',
        answers : [
          { answer: 'Brendan Eich', correct: false },
          { answer: 'Facebook', correct: false },
          { answer: 'Evan You', correct: true },
          { answer: 'Google team', correct: false }
        ]
      },
      {
        question: 'What does the acronym Html represent?',
        answers : [
          { answer: 'Hypertonic Markup Language', correct: false },
          { answer: 'Hypertype Mouse Language', correct: false },
          { answer: 'Hypertransfer Markup Language', correct: false },
          { answer: 'Hypertext Markup Language', correct: true }
        ]
      },
      {
        question: 'What is responsive design?',
        answers : [
          { answer: 'Adapting the site to different devices', correct: true },
          { answer: 'Tool for design', correct: false },
          { answer: 'Web plugin', correct: false },
          { answer: 'Text editor', correct: false }
        ]
      },
      {
        question: 'What is Bulma?',
        answers : [
          { answer: 'Text editor', correct: false },
          { answer: 'Preprocessor', correct: false },
          { answer: 'CSS framework', correct: true },
          { answer: 'Programming language', correct: false }
        ]
      },
      {
        question: 'What is Git?',
        answers : [
          { answer: 'System for tracking changes', correct: true },
          { answer: 'Operating system', correct: false },
          { answer: 'Web site', correct: false },
          { answer: 'Web browser', correct: false }
        ]
      },
    ];

    return { questions }
  }
}


