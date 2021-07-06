import ImageRequest from './IImageRequest';
import LanguageRequest from './ILanguageRequest';

export type NotificationType =
  'userAnsweredToOneOfYourQuestion'
  | 'anotherAnswerInOneQuestionIFollow'
  | 'oneUserLikedOneOfMyFeelings'
  | 'other';

export interface GetMyNotificationsRequest {
  pageRequested: number;
  itemsPerPage: number;
}

export interface RegisterDeviceRequest {
  token: string;
}

export interface RegisterDeviceTokenRequest {
  deviceToken: string;
}

export interface SetNotificationAsViewedRequest {
  notificationUid: string;
}

export interface NotificationCreationRequest {
  targetUid: string;
  title: LanguageRequest[];
  text: LanguageRequest[];
  type: NotificationType;
  image?: ImageRequest;
  dreamUid?: string;
  questionUid?: string;
  answerUid?: string;
  feelingUid?: string;
}

export interface NoticeDeleteRequest {
  notificationId: string;
}

export interface SendEmailToChatUser {
  senderUid: string;
  receiverUid: string;
}