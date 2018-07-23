import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', loadChildren: './profile#ProfileModule' },
  { path: '**', redirectTo: '' }
];

const APP_ROUTES_EXTRA_OPTIONS: ExtraOptions = {};

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      APP_ROUTES_EXTRA_OPTIONS
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }
