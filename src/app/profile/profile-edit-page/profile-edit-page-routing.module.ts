import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEditPageComponent } from './profile-edit-page/profile-edit-page.component';

const ROUTES: Routes = [
  { path: ':id', component: ProfileEditPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileEditPageRoutingModule { }