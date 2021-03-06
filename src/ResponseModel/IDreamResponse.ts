import ImageResponse from './IImageResponse';
import LanguageResponse from './ILanguageResponse';

export default interface DreamResponse {
  uid: string;
  creationDate: string;
  categoryUid?: string;
  title: LanguageResponse[];
  content: LanguageResponse[];
  image?: ImageResponse;
  usersDoneCounter: number;
  usersLikesCounter: number;
  isEasy: boolean;
  likesBy?: string[];
  donesBy?: string[];
  classBox?: string;
}
