import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsMainComponent } from './components/posts-main/posts-main.component';

const postRouting: Routes = [
  {
    path: '',
    component: PostsMainComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(postRouting)],
  exports: [RouterModule],
})
export class PostRouting {}
