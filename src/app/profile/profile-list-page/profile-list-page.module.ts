import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { SharedModule } from '../../shared/shared.module';
import { ApiModule } from '../../api/api.module';
import { ProfileComponentsModule } from '../profile-components/profile-components.module';
// Router
import { ProfileListPageRoutingModule } from './profile-list-page-routing.module';

import { ProfileListPageComponent } from './profile-list-page/profile-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    ApiModule,
    SharedModule,
    ProfileComponentsModule,
    ProfileListPageRoutingModule
  ],
  declarations: [ProfileListPageComponent]
})
export class ProfileListPageModule { }
