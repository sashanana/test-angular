import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import { ProfileEditPageRoutingModule } from './profile-edit-page-routing.module';

import { ProfileEditPageComponent } from './profile-edit-page/profile-edit-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileEditPageRoutingModule
  ],
  declarations: [ProfileEditPageComponent]
})
export class ProfileEditPageModule { }
