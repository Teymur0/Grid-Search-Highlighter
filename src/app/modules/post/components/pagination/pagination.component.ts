import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() pageLengt!: number;
  @Input() pageSize!: number;
  @Output() currentPageChange = new EventEmitter<number>();
  @Output() currentPerPageChanged = new EventEmitter<number>();
  perPage!: number;

  getCurrentPage(page: number) {
    this.currentPageChange.emit(page);
  }

  getCurrentPerPage() {
    this.currentPerPageChanged.emit(this.perPage);
    this.currentPage = 1;
  }
  ngOnInit(): void {
    this.perPage = this.pageSize;
  }
}
