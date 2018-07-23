import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesTableComponent } from './profiles-table/profiles-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfilesTableComponent],
  exports: [ProfilesTableComponent]
})
export class ProfileComponentsModule { }
