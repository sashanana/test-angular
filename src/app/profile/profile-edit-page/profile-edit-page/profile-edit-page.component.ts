import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';
import { ProfileService } from '../../profile.service';
import { Profile, Asset } from '../../models';
import { ProfileEditFormGroup } from '../view-models';

@Component({
  selector: 'app-profile-edit-page',
  templateUrl: './profile-edit-page.component.html',
  styleUrls: ['./profile-edit-page.component.scss']
})
export class ProfileEditPageComponent implements OnInit {

  public profile: Profile;
  public isApiError = false;
  public profileID: string;
  public form: FormGroup;
  public isSubmitting = false;
  public isSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileID = this.route.snapshot.paramMap.get('id');
    this.loadProfile();
  }

  public saveProfile(): void {
    this.isSubmitting = true;
    this.profileService
        .saveProfileToServer(this.profileID, this.form.value)
        .pipe(
          catchError((error) => {
            this.handleApiError();
            return Observable.throw(error);
          })
        )
        .subscribe(() => {
          this.isSubmitting = false;
          this.isSuccess = true;
          setTimeout(() => {this.isSuccess = false; }, 1000);
          this.profile = this.form.value; // Update profile value
        });
  }

  public saveToThumbnail(asset: Asset): void {
    this.isSubmitting = true;
    this.profileService
        .saveProfileThumbnailToServer(this.profileID, this.profile, asset) // Update thumbnail only
        .pipe(
          catchError((error) => {
            this.handleApiError();
            return Observable.throw(error);
          })
        )
        .subscribe((update) => {
          this.isSubmitting = false;
          this.isSuccess = true;
          setTimeout(() => {this.isSuccess = false; }, 1000);
          this.form.get('thumbnail').setValue(update.thumbnail);
          this.profile = update; // Update profile value
        }); // Save only thumbnail
  }

  /*** Private ***/
  private loadProfile(): void {
    this.profileService
        .getProfileById(this.profileID)
        .pipe(
          catchError((error) => {
            this.handleApiError();
            return Observable.throw(error);
          })
        ).subscribe((response) => {
          this.profile = response;
          this.createForm(response);
        });
  }
  /*
   * Create form with profile value
   */
  private createForm(profile: Profile): void {
    this.form = new ProfileEditFormGroup(profile).setFromGroup(this.formBuilder);
  }
  private handleApiError(): void {
    this.isApiError = true;
  }

}
