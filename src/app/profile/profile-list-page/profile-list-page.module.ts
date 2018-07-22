import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Router
import { ProfileListPageRoutingModule } from './profile-list-page-routing.module';

import { ProfileListPageComponent } from './profile-list-page/profile-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileListPageRoutingModule
  ],
  declarations: [ProfileListPageComponent]
})
export class ProfileListPageModule { }
