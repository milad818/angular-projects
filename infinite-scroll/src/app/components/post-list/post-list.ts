import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, inject, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../../services/post.service';

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

  postService = Inject(PostService);

  ngOnInit(): void {
    this.loadPosts();
  }

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
        }
      },
      error: (error: any) => {
        this.handleError(error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  // APPROACH A: Legacy Approach
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // 1. Calculate how much has been scrolled
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;

    // 2. Check if we are near the bottom (e.g., 200px threshold)
    if (pos >= max - 200 && !this.isLoading) {
      this.loadPosts();
    }
  }

  // APPROACH B: Intersection Observer
  // TO-DO

}
