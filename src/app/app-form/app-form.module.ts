import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TypeaheadControlComponent } from './typeahead-control/typeahead-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TypeaheadControlComponent],
  exports: [TypeaheadControlComponent]
})
export class AppFormModule { }
