import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFormModule } from '../../app-form/app-form.module';

import { ProfilesTableComponent } from './profiles-table/profiles-table.component';
import { ProfileFilterBoxComponent } from './profile-filter-box/profile-filter-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppFormModule
  ],
  declarations: [ProfilesTableComponent, ProfileFilterBoxComponent],
  exports: [ProfilesTableComponent, ProfileFilterBoxComponent]
})
export class ProfileComponentsModule { }
