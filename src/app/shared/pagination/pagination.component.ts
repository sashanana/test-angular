import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalPage: number;  // Number of page
  @Input() currentPage: number;  // Current page
  @Output() changeEvent = new EventEmitter<number>();
  public pages: number[]; // Array of page number

  constructor() { }

  ngOnInit() {
    this.pages = Array.from(new Array(this.totalPage), (val, index) => index + 1);
  }

  public onChange(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.changeEvent.next(page);
    }
  }

}
