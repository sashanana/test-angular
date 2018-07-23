import { Component, OnInit, Input } from '@angular/core';

export type ApiResponseType = 'no-result' | 'default';

@Component({
  selector: 'app-api-response-message',
  templateUrl: './api-response-message.component.html',
  styleUrls: ['./api-response-message.component.scss']
})
export class ApiResponseMessageComponent implements OnInit {

  @Input() public type: ApiResponseType = 'default';
  @Input() public headline;
  @Input() public message: string;
  private DefaultHeadline = 'Something went wrong';
  private NoResultHeadline = 'No results';

  constructor() { }

  ngOnInit() {
    switch (this.type) {
      case 'no-result':
        this.headline = this.NoResultHeadline;
        break;
      default:
        this.headline = this.DefaultHeadline;
        break;
    }
  }

}
