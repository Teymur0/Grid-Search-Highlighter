import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css'],
})
export class PostTableComponent implements OnInit {
  constructor(private postService: PostService) {}
  searchedWord = '';

  @Input() mappedPosts: Post[] = [];
  ngOnInit(): void {
    this.postService.searchedWord.subscribe((searchedWord) => {
      this.searchedWord = searchedWord;
    });
  }
}
