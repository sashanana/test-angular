import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { startWith } from 'rxjs/operators/startWith';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { AppSubscriptionComponent } from '../../shared/app-subscription-component';

@Component({
  selector: 'app-typeahead-control',
  templateUrl: './typeahead-control.component.html',
  styleUrls: ['./typeahead-control.component.scss']
})
export class TypeaheadControlComponent
  extends AppSubscriptionComponent
  implements OnInit {

  // IMPROVE support formControl
  @Input() label: string;
  @Input() control: FormControl;
  @Output() changeEvent = new EventEmitter<string>();
  public name: string;
  private readonly UpdateDebounceTime: number = 600;
  private update$ = new Subject<string>();    // update subject for name

  constructor() { super(); }

  ngOnInit() {
    this.update$.pipe(
      startWith(''),
      debounceTime(this.UpdateDebounceTime),
      distinctUntilChanged(),
      takeUntil(this.ngUnsubscribe$)
    ).subscribe((name) => this.applyChange(name));
  }

  public onNameChange(): void {
    this.update$.next(this.name);
  }

  private applyChange(name: string): void {
    if (this.control) {
      this.control.setValue(name);
    }
    this.changeEvent.next(name);
  }

}
