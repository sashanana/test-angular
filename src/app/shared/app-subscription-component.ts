import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * Maintain subscription
 */
export class AppSubscriptionComponent implements OnDestroy {

  protected ngUnsubscribe$ = new Subject<void>();

  public ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}