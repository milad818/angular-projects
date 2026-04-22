import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface QA {
  question: string,
  answer: string
}

@Component({
  selector: 'app-qa-accordion',
  imports: [CommonModule],
  templateUrl: './qa-accordion.html',
  styleUrl: './qa-accordion.css',
})
export class QaAccordion {
  openedIndex: number | null = null;

  qas: QA[] = [
      {
        question: 'What is Angular?',
        answer: 'Angular is a platform for building mobile and desktop web applications.',
      },

      {
        question: 'What is a component in Angular?',
        answer:'A component controls a patch of the screen called a view. Components are the main building block of Angular applications.',
      },

      {
        question: 'What are Angular directives?',
        answer: 'Directives are instructions in the DOM. Angular directives allow you to attach behavior to elements in the DOM.',
      },
    ]

  toggleQA(index: number) {
    // Pay attention to strict equality operator, where the condition is checked
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
