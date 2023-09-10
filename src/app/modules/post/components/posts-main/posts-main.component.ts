import { Component, OnInit } from '@angular/core';
import { PostsApiService } from '../../services/posts.api.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts-main',
  templateUrl: './posts-main.component.html',
  styleUrls: ['./posts-main.component.css'],
})
export class PostsMainComponent implements OnInit {
  posts: Post[] = [];
  pageLengt = 0;
  pageSize = 5;
  currentPage = 1;

  search = ''; //search from input

  defaultFilterValue = 0;
  userIds: number[] = [];
  mappedPosts: Post[] = [];
  constructor(private postsApiService: PostsApiService) {}

  ngOnInit(): void {
    this.postsApiService.fethcPosts().subscribe((posts) => {
      this.posts = posts;
      this.mappedPosts = posts.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );

      this.pageLengt = this.posts.length;
      this.userIds = [...new Set(this.posts.map((post) => post.userId))];
    });
  }

  onCurrentPageChanged(page: any) {
    this.currentPage = page;
    this.loadPosts();
  }
  setSearchData(serchData: any) {
    this.search = serchData;
    this.loadPosts();
  }
  setFilterData(fillterData: any) {
    this.defaultFilterValue = fillterData;
    this.loadPosts();
  }
  setCurrentPage(pageSize: number) {
    this.currentPage = 1;
    this.pageSize = pageSize;
    this.loadPosts();
  }
  loadPosts() {
    this.mappedPosts = this.posts
      .filter(
        (post) =>
          (post.body.includes(this.search) ||
            post.title.includes(this.search)) &&
          (this.defaultFilterValue !== 0
            ? post.userId == this.defaultFilterValue
            : post.userId !== 0)
        // post.userId == this.defaultFilterValue
      )
      .slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
      
  }
}
