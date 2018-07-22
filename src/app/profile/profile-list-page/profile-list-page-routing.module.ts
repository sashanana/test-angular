import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListPageComponent } from './profile-list-page/profile-list-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProfileListPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileListPageRoutingModule { }