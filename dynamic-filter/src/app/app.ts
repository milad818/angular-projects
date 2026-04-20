import { CommonModule } from '@angular/common';
import { Component, Signal, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Typing is not necessary. Typescript automatically knows this is a Signal<string>.
  searchTerm: Signal<string> = signal('');

  // BE CAREFUL! If no signaling, compute() will not be able to detect changes and recompute
  // searchTerm: string = '';

  // In modern Angular, because the HTML template needs to see your variables (like filteredUsers or searchTerm),
  // those variables must be public.
  items: string[] = [
      'Angular Tutorial',
      'React Tutorial',
      'Vue.js Tutorial',
      'JavaScript Basics',
      'TypeScript Fundamentals',
      'Building with HTML & CSS',
      'Introduction to Node.js',
      'Getting Started with MongoDB',
      'Web Development with Node.js',
      'Advanced JavaScript Concepts',
      'Mastering Angular',
      'Learning CSS Grid',
      'Node.js for Beginners',
      'The Complete JavaScript Guide',
      'CSS Flexbox in Depth',
      'Getting Started with Express.js',
      'Deep Dive into GraphQL',
      'Modern Web Development Trends',
      'Building REST APIs with Express',
      'Introduction to Git and GitHub',
      'Web Accessibility Essentials',
    ];

  // NOT NECESSARY!
  // items: Signal<string[]> = signal([
  //   'Angular Tutorial',
  //   'React Tutorial',
  //   'Vue.js Tutorial',
  //   'JavaScript Basics',
  //   'TypeScript Fundamentals',
  //   'Building with HTML & CSS',
  //   'Introduction to Node.js',
  //   'Getting Started with MongoDB',
  //   'Web Development with Node.js',
  //   'Advanced JavaScript Concepts',
  //   'Mastering Angular',
  //   'Learning CSS Grid',
  //   'Node.js for Beginners',
  //   'The Complete JavaScript Guide',
  //   'CSS Flexbox in Depth',
  //   'Getting Started with Express.js',
  //   'Deep Dive into GraphQL',
  //   'Modern Web Development Trends',
  //   'Building REST APIs with Express',
  //   'Introduction to Git and GitHub',
  //   'Web Accessibility Essentials',
  // ]);

  // The computed block "listens" for changes if the the sarch term is implement via signal
  // Otherwise, it won't be able to detect the changes
  filteredItems = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.items.filter(item =>
      item.toLowerCase().includes(term));
  });

}
