import ImageResponse from './IImageResponse';

export interface UserPublic {
  uid: string;
  alias: string;
  img?: ImageResponse;
  level: number;
  description?: string;
  gender?: 'male' | 'female' | 'other' | string;
  availableToHelp?: boolean;
  points: number;
}

export interface UserPartial {
  alias: string;
  img?: ImageResponse;
}
