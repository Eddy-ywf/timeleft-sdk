import { DreamResponse } from "./IDreamResponse";
import { ImageResponse } from "./IImageResponse";

export default interface MyProfileResponse {
  uid: string;
  alias: string;
  img?: ImageResponse;
  level: number;
  description?: string;
  gender?: 'male' | 'female';
  availableToHelp?: boolean;
  email: string;
  language: 'fr-FR' | 'en-EN';
  cguAccepted: boolean;
  creationDate: string;
  birthdate?: string;
  likes: DreamResponse[],
  done: DreamResponse[],
  points: number;
}
