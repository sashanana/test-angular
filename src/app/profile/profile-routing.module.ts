import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', loadChildren: './profile-list-page#ProfileListPageModule', pathMatch: 'full' },
  { path: 'edit', loadChildren: './profile-edit-page#ProfileEditPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }