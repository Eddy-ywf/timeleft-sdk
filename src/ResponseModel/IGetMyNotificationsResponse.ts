import { NotificationResponse } from './INotificationResponse';

export interface GetMyNotificationsResponse {
  totalItems: number;
  data: NotificationResponse[];
  currentPage: number;
  totalPages: number;
  message: string;
}

export interface RegisterDeviceResponse {
  info: 'ok';
}

export interface RegisterDeviceTokenResponse {
  info: 'created';
  deviceTokenUid: string;
}

export interface SetNotificationAsViewedResponse {
  info: 'ok';
}

export interface NotificationCreationResponse {
  info: 'ok';
}

export interface NotificationDeleteResponse {
  info: 'ok';
}

export interface NotificationSendToChatUserResponse
  extends NotificationDeleteResponse {}

export interface deleteDeviceTokenResponse extends NotificationDeleteResponse {}