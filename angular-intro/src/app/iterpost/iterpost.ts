import { Component, input, signal } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-iterpost',
  imports: [],
  templateUrl: './iterpost.html',
  styleUrl: './iterpost.css',
})
export class Iterpost {

  image=input<string>();

}


