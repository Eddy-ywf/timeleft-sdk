import DreamResponse from './IDreamResponse';
import ImageResponse from './IImageResponse';

export default interface PublicProfileResponse {
  uid: string;
  alias: string;
  img?: ImageResponse;
  level: number;
  description?: string;
  gender?: 'male' | 'female';
  availableToHelp?: boolean;
  likes: DreamResponse[];
  done: DreamResponse[];
  profilCompleted: boolean;
  points: number;
  isOnline?: boolean;
  message?: string;
}
