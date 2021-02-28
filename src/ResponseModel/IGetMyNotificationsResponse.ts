import { NotificationResponse } from './INotificationResponse';

export interface GetMyNotificationsResponse {
  totalItems: number;
  data: NotificationResponse[];
  currentPage: number;
  totalPages: number;
  message: string;
}