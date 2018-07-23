import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  /*
   * Get the profile value by key
   */
  public getProfileDetailByKey(key: string) {
    return 'value';
  }

}
