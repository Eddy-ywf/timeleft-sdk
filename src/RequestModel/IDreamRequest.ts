import ImageRequest from './IImageRequest';
import LanguageRequest from './ILanguageRequest';

export default interface DreamRequest {
  uid?: string;
  categoryUid?: string;
  title: LanguageRequest[];
  content: LanguageRequest[];
  image?: ImageRequest;
}
