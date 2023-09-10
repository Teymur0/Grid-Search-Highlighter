import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.css'],
})
export class PostFilterComponent implements OnInit, OnChanges {
  @Input() search!: string;
  @Input() defaultFilterValue!: number;
  @Input() userIds!: number[];
  @Output() changedSearch = new EventEmitter<string>();
  @Output() changedFilter = new EventEmitter<number>();
  changedSearchValue!: string;
  changedFilterValue!: number;

  constructor(private postService: PostService) {}

  onChangeSearchValue() {
    this.changedSearch.emit(this.changedSearchValue);
  }
  getFilterValue() {
    this.changedFilter.emit(this.changedFilterValue);
  }

  ngOnInit(): void {
    this.changedSearchValue = this.search;
    this.changedFilterValue = this.defaultFilterValue;
  }
  ngOnChanges(): void {
    this.postService.sendSearchedWord(this.changedSearchValue);
  }
}
