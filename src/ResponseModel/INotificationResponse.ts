import AnswerResponse from './IAnswerResponse';
import EmojiResponse from './IEmojiResponse';
import ImageResponse from './IImageResponse';
import LanguageResponse from './ILanguageResponse';
import QuestionResponse from './IQuestionResponse';

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
  questions?: QuestionResponse;
  answers?: AnswerResponse;
  emojis?: EmojiResponse[];
}

export type notificationTypeResponse =
  | 'userAnsweredToOneOfYourQuestion'
  | 'anotherAnswerInOneQuestionIFollow'
  | 'oneUserLikedOneOfMyFeelings';
