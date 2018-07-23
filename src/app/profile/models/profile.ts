import { ProfileThumbnail } from './profile-thumbnail';
import { Nationality } from './nationality';
import { Asset } from './asset';

export interface Profile {
  id: string;
  summary: string;
  profile_type_key: string;
  profile_type_name: string;
  is_visible: boolean;
  is_enabled: boolean;
  profile_url: string;
  first_name: string;
  last_name: string;
  language: string;
  profile_sub_title: string;
  country_code: string;
  country_name: string;
  profile_title: string;
  profile_type_id: number;
  profile_slug: string;
  thumbnail: ProfileThumbnail;
  nationalities: Nationality[];
  assets: Asset[];
}