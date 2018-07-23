import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import { Profile } from './models';

@Injectable()
export class ProfileService {

  constructor(
    private api: ApiService
  ) { }

  /*
   * Get profile list
   */
  public getProfiles(): Observable<Profile[]> {

    const path = 'profiles';
    return this.api.request( {
      path,
      method: 'GET'
    } );
  }

}