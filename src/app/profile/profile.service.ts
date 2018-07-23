import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Profile, ApiProfilesParameter, ApiProfilesResponse } from './models';

@Injectable()
export class ProfileService {

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

    const path = 'profiles';
    return this.api.request({
      path,
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

}