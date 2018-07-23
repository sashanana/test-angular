import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';
import { ProfileService } from '../../profile.service';
import { Profile } from '../../models';

@Component({
  selector: 'app-profile-list-page',
  templateUrl: './profile-list-page.component.html',
  styleUrls: ['./profile-list-page.component.scss']
})
export class ProfileListPageComponent implements OnInit {

  public profiles$: Observable<Profile[]>;
  public isApiError = false;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.loadProfiles();
  }

  public loadProfiles(): void {
    this.profiles$ =
      this.profileService
      .getProfiles()
      .pipe(
        catchError((error) => {
          this.handleApiError();
          return Observable.throw(error);
        })
      );
  }

  /*** Private ***/
  private handleApiError(): void {
    this.isApiError = true;
  }

}
