import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Profile, ApiProfilesParameter, ApiProfilesResponse, Asset } from './models';

@Injectable()
export class ProfileService {

  private readonly ApiPath = 'profiles';

  constructor(
    private api: ApiService
  ) { }

  /*
   * Get profile list
   */
  public getProfiles(params: ApiProfilesParameter): Observable<ApiProfilesResponse> {

    // Clean invalid params
    Object.keys(params).forEach((key) => (params[key] === null || params[key] === '') && delete params[key]);

    const configs = {
      observe: 'response'
    };

    return this.api.request({
      path: this.ApiPath,
      method: 'GET',
      params,
      configs
    }).pipe(
      map((response) => {
        const total = response.headers.get('X-Total-Count');
        const data: ApiProfilesResponse = {
          list: response.body,
          total: total || 0
        };
        return data;
      })
    );
  }
  /*
   * Get profile by id
   */
  public getProfileById(id: string): Observable<Profile> {
    if (!id) {
      throw Observable.throw({});
    }
    return this.api.request({
      path: this.ApiPath + '/' + id,
      method: 'GET'
    });
  }

  public saveProfileToServer(id: string, value: Profile): Observable<any> {
    if (!id) {
      throw Observable.throw({});
    }
    // Ensure profile_title is updated
    // Expect first_name, last_name will always override profile_title
    value.profile_title = [value.first_name, value.last_name].join(' ');

    // TODO Update nationalities
    return this.api.request({
      path: this.ApiPath + '/' + id,
      method: 'PUT',
      body: value
    });
  }

  public saveProfileThumbnailToServer(id: string, value: Profile, asset: Asset): Observable<any> {
    if (!id) {
      throw Observable.throw({});
    }
    // Update asset
    value.thumbnail.file = asset.path;
    value.thumbnail.content_size = asset.size;
    value.thumbnail.width = asset.width;
    value.thumbnail.height = asset.height;

    return this.api.request({
      path: this.ApiPath + '/' + id,
      method: 'PUT',
      body: value
    })
    .pipe(map(() => value)); // return updated profile
  }
}