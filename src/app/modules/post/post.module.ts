import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsMainComponent } from './components/posts-main/posts-main.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PostRouting } from './post-routing.module';
import { PostFilterComponent } from './components/post-filter/post-filter.component';
import { PostTableComponent } from './components/post-table/post-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchHighlightPipe } from './pipes/search-highlight.pipe';

@NgModule({
  declarations: [
    PostsMainComponent,
    PaginationComponent,
    PostFilterComponent,
    PostTableComponent,
    SearchHighlightPipe,
  ],
  imports: [CommonModule, PostRouting, HttpClientModule, FormsModule],
})
export class PostModule {}
