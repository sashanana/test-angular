import { FormBuilder, Validators } from '@angular/forms';
import { Profile } from '../../models';

export const ProfileEditFormErrorMessage = {
  first_name: {
    required: 'This filed is required.'
  }
};

export class ProfileEditFormGroup {
  constructor(
    public value: Profile
  ) { }

  public setFromGroup(builder: FormBuilder): any {
    // No validation required at the moment
    const formGroup = builder.group(this.value);

    // Name validation
    formGroup.get('first_name').setValidators([Validators.required]);

    // Handle nationalities group
    const nationalitiesGroup = this.value.nationalities.map((national) => {
      return builder.group(national);
    });
    formGroup.setControl('nationalities', builder.array(nationalitiesGroup));

    // Handle assets group
    const assetsGroup = this.value.assets.map((asset) => {
      return builder.group(asset);
    });
    formGroup.setControl('assets', builder.array(assetsGroup));
    return formGroup;
  }
}