import AudioResponse from './IAudioResponse';
import EmojiResponse from './IEmojiResponse';
import ImageResponse from './IImageResponse';
import { UserPublic } from './IUserPublicResponse';

export interface FeelingResponse {
  userUid: string;
  user?: UserPublic;
  title?: string;
  creationDate: string;
  emojis?: EmojiResponse[];
  images: ImageResponse[];
  audios: AudioResponse[];
  dreamUid: string;
  uid: string;
  likesTotal: number;
  likedBy?: string[];
  dislikedBy?: string[];
  dans?: string;
}

export interface FeelingPartialResponse {
  uid?: string;
  title?: string;
  emojis?: EmojiResponse[];
  images: ImageResponse[];
  audios: AudioResponse[];
  likesTotal: number;
}
