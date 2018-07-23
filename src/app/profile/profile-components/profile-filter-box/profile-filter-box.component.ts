import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterFormGroup, FilterFormValue } from './view-models';

@Component({
  selector: 'app-profile-filter-box',
  templateUrl: './profile-filter-box.component.html',
  styleUrls: ['./profile-filter-box.component.scss']
})
export class ProfileFilterBoxComponent implements OnInit {

  @Output() changeEvent = new EventEmitter<FilterFormValue>();
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.value);
      this.changeEvent.next(this.form.value);
    });
  }

  /*** private ***/
  private createForm(): void {
    this.form = this.formBuilder.group(
      new FilterFormGroup().getFromGroup()
    );
  }

}
