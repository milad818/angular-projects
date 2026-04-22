import { Component, signal } from '@angular/core';
import { QaAccordion } from './qa-accordion/qa-accordion';

@Component({
  selector: 'app-root',
  imports: [ QaAccordion ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
