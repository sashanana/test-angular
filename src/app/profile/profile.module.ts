import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import { ProfileRoutingModule } from './profile-routing.module';
// Service
import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [],
  providers: [ProfileService]
})
export class ProfileModule { }
