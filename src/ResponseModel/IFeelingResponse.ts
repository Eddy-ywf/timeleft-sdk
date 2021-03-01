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
  dans?: string;
}

export interface FeelingPartialResponse {
  title?: string;
  emojis?: EmojiResponse[];
  images: ImageResponse[];
  audios: AudioResponse[];
  likesTotal: number;
}
