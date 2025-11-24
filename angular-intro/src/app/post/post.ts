import { Component, input, output, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  // input('') allows the value of this property to be set by the parent component - initially empty string
  // input.required() but obliges <app-post> to include postImage property, otherwise throws error
  postImage = input.required<string>();
  imageSelected = output<string>();

  constructor() {
    console.log('constructor()');
  }

  ngOnInit() {
    console.log("ngOnInit() called", this.postImage());
  }

  ngOnChanges() {
    console.log('ngOnChanges() called');
  }

  ngDoCheck() {
    console.log('ngDoCheck() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called');

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');

  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');

  }

  ngOnDestroy() {

  }
}
