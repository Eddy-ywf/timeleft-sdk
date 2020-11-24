import FeelingResponse from './IFeelingResponse';
import ImageResponse from './IImageResponse';
import LanguageResponse from './ILanguageResponse';
import QuestionResponse from './IQuestionResponse';
import { UserPublic } from './IUserPublicResponse';

export default interface FullDreamResponse {
  uid: string;
  creationDate: string;
  categoryUid?: string;
  title: LanguageResponse[];
  content: LanguageResponse[];
  image?: ImageResponse;
  usersDoneCounter: number;
  usersLikesCounter: number;
  isEasy: boolean;

  createdBy: UserPublic;
  likedBy: UserPublic[];
  doneBy: UserPublic[];
  feelings: FeelingResponse[];
  questions: QuestionResponse[];
}