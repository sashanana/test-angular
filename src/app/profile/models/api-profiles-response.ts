import { Profile } from './profile';

export interface ApiProfilesResponse {
  list: Profile[];
  total: number;
}