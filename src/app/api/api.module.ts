import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { HttpClientModule } from '@angular/common/http';
// Service
import { AppApiServiceProvider } from './api-service.factory';
import { ApiResponseMessageComponent } from './api-response-message/api-response-message.component';

const SERVICES: any[] = [
  AppApiServiceProvider
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ApiResponseMessageComponent],
  exports: [ApiResponseMessageComponent]
})
export class ApiModule {
  public static forRoot() {
      return {
        ngModule: ApiModule,
        providers: [ ...SERVICES ]
      };
   }
}
