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

export interface SetNotificationAsViewedResponse {
  info: 'ok';
}

export interface NotificationCreationResponse {
  info: 'ok';
}