import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../../services/post.service';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, Post],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,   //
})
export class PostList implements OnInit {
  posts: JSONPlaceholderPost[] = [];
  isLoading = false;
  pageNumber: number = 1;
  itemLimit: number = 10;
  errorMessage: string = '';


  ngOnInit(): void {
    this.loadPosts();
  }

  // Inject service
  private postService = inject(PostService);

  private cdr = inject(ChangeDetectorRef);


  private handleError(error: any): void {
    console.error('Error raised while fetching posts:', error);
    this.errorMessage = 'No able to fetch posts at the moment, please try again later!'
  }

  loadPosts(): void {
    this.isLoading = true;
    this.postService.getPosts(this.pageNumber, this.itemLimit).subscribe({
      next: (newPosts: any[]) => {
        if (newPosts && newPosts.length > 0) {
          // Append new posts to the existing list of posts
          this.posts = [...this.posts, ...newPosts];
          this.pageNumber++;
          this.errorMessage= '';
          // this.isLoading = false;    // Cleaner if inside complete because there is no quarantee the operation is finished
          // this.cdr.detectChanges();  // Avoid it here if default strategy; otherwise, NG0100: ExpressionChangedAfterItHasBeenCheckedError in console
                                        // Because Angular is already in the middle of a detection cycle and you force another one while values are changing, it functions as isLoading toggled here
          // this.cdr.markForCheck();   // By default such changes are detected automatically unless data flow timing depends on the complete() cycle
                                        // That is why crashes when checked here and not below in complete()
        }
      },
      error: (error: any) => {
        this.handleError(error);
      },
      // By complete(), data mutation is finished and state is stable (meaning the stream of data is finished)
      complete: () => {
        this.isLoading = false;  // Toggling it here we are sure the operation is finished
        // this.cdr.markForCheck();
        this.cdr.detectChanges();
      }
    });
  }

  // APPROACH A: Legacy Approach
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // 1. Calculate how much has been scrolled
    const pos = window.innerHeight + window.scrollY;
    const max = document.body.scrollHeight;

    // 2. Check if we are near the bottom
    if (pos >= max && !this.isLoading) {
      this.loadPosts();
    }
  }

  // APPROACH B: Intersection Observer
  // TO-DO

}
