import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {

  tasks: string[] = [];
  newTask: string = '';
  errorMessage: string | null = null;

  addTask() {

    // Validation
    if (!this.newTask.trim()) {
      this.errorMessage = 'Task cannot be empty!';
      this.newTask = "";
      return;
    }

    this.tasks.push(this.newTask);
    this.newTask = ''
    this.errorMessage = null;
  }

  // Receives the start index and 1 as remove count
  // Therefore, removes the item corresponding to the index
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
