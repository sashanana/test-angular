import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models';
import { ProfileDetailsDefination } from './view-models';

@Component({
  selector: 'app-profiles-table',
  templateUrl: './profiles-table.component.html',
  styleUrls: ['./profiles-table.component.scss']
})
export class ProfilesTableComponent implements OnInit {

  public readonly profileDetailsDefination = ProfileDetailsDefination;
  @Input() profiles: Profile[];
  @Output() selectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /*
   * Get the profile value by key
   */
  public getProfileDetailByKey(profile: Profile, key: string): string {
    let value = '';
    switch (key) {
      case 'name':
        value = profile.profile_title + '<br/><span>' + profile.profile_sub_title + '</span>';
        break;
      case 'summary':
        value = profile.summary;
        break;
      case 'nationalities':
        if (profile.nationalities) {
          value =
            profile.nationalities
            .map((national) => national.country_name)
            .join(', ');
        }
        break;
      case 'country':
        value = profile.country_name;
    }
    return value;
  }

  public onSelect(id: string): void {
    this.selectedEvent.next(id);
  }

}
