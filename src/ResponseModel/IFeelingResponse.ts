import AudioResponse from "./IAudioResponse";
import EmojiResponse from "./IEmojiResponse";
import ImageResponse from "./IImageResponse";
import { UserPublic } from "./IUserPublicResponse";

export default interface FeelingResponse {
  userUid: string;
  user?: UserPublic;
  title?: string;
  creationDate: string;
  emojis?: EmojiResponse[];
  images: ImageResponse[];
  audios: AudioResponse[];
  dreamUid: string;
}