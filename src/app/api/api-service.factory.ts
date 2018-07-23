import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

export function AppApiServiceFactory(http: HttpClient) {

  return new ApiService(environment.apiHost, http);

}

export const AppApiServiceProvider: {[key: string]: any} = {

  provide: ApiService,
  useFactory: AppApiServiceFactory,
  deps: [ HttpClient ]

};