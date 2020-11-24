import AudioRequest from './IAudioRequest';
import ImageRequest from './IImageRequest';

export default interface AddFeelingRequest {
  title?: string;
  emojis?: string[];
  images?: ImageRequest[];
  audios?: AudioRequest[];
  dreamUid: string;
}
