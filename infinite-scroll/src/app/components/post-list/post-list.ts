import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../../services/post.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, Post],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
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
          // this.cdr.detectChanges();  // Avoid it here, otherwise, NG0100: ExpressionChangedAfterItHasBeenCheckedError in console
                                        // Instead add markForCheck() below to check/mark for changes
        }
      },
      error: (error: any) => {
        this.handleError(error);
      },
      complete: () => {
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }

  // APPROACH A: Legacy Approach
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // 1. Calculate how much has been scrolled
    const pos = window.innerHeight + window.scrollY;
    const max = document.body.scrollHeight;

    // 2. Check if we are near the bottom (e.g., 200px threshold)
    if (pos >= max && !this.isLoading) {
      this.loadPosts();
    }
  }

  // APPROACH B: Intersection Observer
  // TO-DO

}
