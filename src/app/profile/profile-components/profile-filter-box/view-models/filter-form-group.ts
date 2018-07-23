export interface FilterFormValue {
  search: string;
  enable: boolean;
  visible: boolean;
}

const FilterFormDefaultValue: FilterFormValue = {
  search: '',
  enable: null,
  visible: null
};

export class FilterFormGroup {
  constructor(
    public value: FilterFormValue = FilterFormDefaultValue
  ) { }

  public getFromGroup(): any {
    // No validation required
    return this.value;
  }
}