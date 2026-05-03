import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit {

  // An input property typically refers to data passed from a parent component to a child component.
  // It's important to use ngOnChanges in the child component if you need to perform certain actions
  // or update something in the component whenever that input data changes.
  // However, if you're simply displaying the data and not reacting to changes, you don't need to use ngOnChanges.
  @Input()
  post!: JSONPlaceholderPost;   // A "!" placed since the variable is not initialized, so it can be null

  randomPhotoUrl!: string;      // Same here for the same reason as above

  // ngOnInit is a general-purpose hook for any initialization logic that should run once when a component starts.
  // Here, it is more like a lifecycle hook that Angular calls automatically after it has finished initializing the component's data-bound inputs
  // Angular waits until inputs are ready, then runs ngOnInit.
  ngOnInit(): void {
    this.generateRandomPhoto();
  }

  private generateRandomPhoto(): void {
    const randomSeed = this.generateRandomNumber(1000)
    this.randomPhotoUrl = `https://picsum.photos/seed/${randomSeed}/50`
  }

  private generateRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
