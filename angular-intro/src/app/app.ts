import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from "./post/post";
import { TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, NgClass, NgStyle } from '@angular/common';
// instead of all the above imports you can simply import the module below
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  // template: `<p> Hi there! </p>`,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Post,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    NgClass, NgStyle]
  // in-line styles go below
  // styles: ['']
})
export class App {
  protected readonly title = signal('angular-intro');

  // Variables in classes are not signals by default
  // To turn them into signal so that the changes can be tracked, we do as follows:
  name = signal('luis')
  // you can also pic different images from picsum.photos/images
  imageURL = signal("https://picsum.photos/id/10/200/200")
  currentDate = signal(new Date());
  cost = signal(2000);
  temperature = signal(30.2);
  burger = signal({
    ingredients: ['bacon', 'tomato', 'cheese'],
    size: 'large'
  })
  blueClass = signal(false);
  fontSize = signal(16);


  getName() {
    return this.name();
  }


  // This will raise an error
  // since TypeScript isn't aware there's a property (value) on the target object
  // however it does exist on the target object
  changeImage(e: KeyboardEvent) {
    // below type assertion is applied; otherwise, throws an error
    // that is, type is asserted before accessing the value
    this.imageURL.set((e.target as HTMLInputElement).value);
  }

  changeImageButton(url: string) {
    this.imageURL.set(url);
  }

  // This will print the event passed to log Image, the image link in this case
  logImage(e: string) {
    console.log(e);
  }

}
