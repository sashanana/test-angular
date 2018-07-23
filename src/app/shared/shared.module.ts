import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent, PaginationComponent],
  exports: [SpinnerComponent, PaginationComponent]
})
export class SharedModule { }
