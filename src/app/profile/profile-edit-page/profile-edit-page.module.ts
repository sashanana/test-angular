import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ApiModule } from '../../api/api.module';
// Routing
import { ProfileEditPageRoutingModule } from './profile-edit-page-routing.module';

import { ProfileEditPageComponent } from './profile-edit-page/profile-edit-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule,
    SharedModule,
    ProfileEditPageRoutingModule
  ],
  declarations: [ProfileEditPageComponent]
})
export class ProfileEditPageModule { }
