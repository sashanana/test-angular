import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { exhaustMap } from 'rxjs/operators/exhaustMap';
import { startWith } from 'rxjs/operators/startWith';
import { ProfileService } from '../../profile.service';
import { ApiProfilesParameter, ApiProfilesResponse } from '../../models';

@Component({
  selector: 'app-profile-list-page',
  templateUrl: './profile-list-page.component.html',
  styleUrls: ['./profile-list-page.component.scss']
})
export class ProfileListPageComponent implements OnInit {

  public response$: Observable<ApiProfilesResponse>;
  public isApiError = false;
  public totalPage = 1;
  private readonly PageSize = 10;
  private requestParams: ApiProfilesParameter = {
    _limit: this.PageSize,
    _page: 1
  };
  private refresh$ = new Subject<void>();

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    // Load profile with latest parameters
    this.response$ =
      this.refresh$
      .pipe(
        startWith(null),
        exhaustMap(() => {
          console.log(this.requestParams);
          return this.getProfilesFromApi(this.requestParams);
        })
      );
  }

  public getProfilesFromApi(params): Observable<ApiProfilesResponse> {
    // Api response
    return this.profileService
      .getProfiles(params)
      .pipe(
        map((response) => {
          this.totalPage = this.getTotalPageSize(response.total, this.requestParams._limit);
          return response;
        }),
        catchError((error) => {
          this.handleApiError();
          return Observable.throw(error);
        })
      );
  }
  /*
   * Get total page size
   */
  public getTotalPageSize(total: number, limit: number): number {
    return Math.floor(total / limit);
  }
  /*
   * Update page and refresh list
   */
  public updatePage(page: number): void {
    console.log('page:', page);
    this.requestParams._page = page;
    this.refresh$.next();
  }

  /*** Private ***/
  private handleApiError(): void {
    this.isApiError = true;
  }

}
