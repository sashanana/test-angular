import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnChanges, OnInit {

  @Input() totalPage: number;  // Number of page
  @Input() currentPage: number;  // Current page
  @Output() changeEvent = new EventEmitter<number>();
  public pages: number[]; // Array of page number

  constructor() { }

  ngOnInit() {
    this.pages = this.getPageObjects(this.totalPage);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.totalPage) {
      this.pages = this.getPageObjects(changes.totalPage.currentValue);
    }
  }

  /*
   * Page is selected
   */
  public onChange(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.changeEvent.next(page);
    }
  }
  /*** private ***/
  private getPageObjects(total: number): number[] {
    return Array.from(new Array(this.totalPage), (val, index) => index + 1);
  }

}
