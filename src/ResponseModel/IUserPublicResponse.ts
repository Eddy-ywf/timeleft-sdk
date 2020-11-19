import ImageResponse from "./IImageResponse";

export interface UserPublic {
  uid: string;
  alias: string;
  img?: ImageResponse;
  level: number;
  description?: string;
  gender?: 'male' | 'female';
  availableToHelp?: boolean;
  points: number;
}