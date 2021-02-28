import ImageResponse from './IImageResponse';
import LanguageResponse from './ILanguageResponse';

export interface NotificationResponse {
  uid: string;
  userUid: string;
  title: LanguageResponse[];
  text: LanguageResponse[];
  image?: ImageResponse;
  creationDate: string;
  readDate?: any;
  isRead?: boolean;
  type: notificationTypeResponse;
  dreamUid?: string;
  questionUid?: string;
  answerUid?: string;
  feelingUid?: string;
}

export type notificationTypeResponse = 'userAnsweredToOneOfYourQuestion' | 'anotherAnswerInOneQuestionIFollow' | 'oneUserLikedOneOfMyFeelings';