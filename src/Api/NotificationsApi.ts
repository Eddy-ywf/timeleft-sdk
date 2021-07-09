import { AxiosPromise } from 'axios';
import AbstractApi from './AbstractApi';
import { deleteDeviceTokenRequest, GetMyNotificationsRequest, NoticeDeleteRequest, NotificationCreationRequest, RegisterDeviceRequest, RegisterDeviceTokenRequest, SendEmailToChatUser, SetNotificationAsViewedRequest } from '../RequestModel/IGetMyNotificationsRequest';
import { deleteDeviceTokenResponse, GetMyNotificationsResponse, NotificationCreationResponse, NotificationDeleteResponse, NotificationSendToChatUserResponse, RegisterDeviceResponse, RegisterDeviceTokenResponse, SetNotificationAsViewedResponse } from '../ResponseModel/IGetMyNotificationsResponse';



class NotificationsApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getMyNotifications(
    requestData: GetMyNotificationsRequest
  ): AxiosPromise<GetMyNotificationsResponse> {
    return this.http.post('notifications-do_get_my_notifications', {
      data: requestData,
    });
  }

  public registerDeviceToken(
    requestData: RegisterDeviceTokenRequest
  ): AxiosPromise<RegisterDeviceTokenResponse> {
    return this.http.post('notifications-do_register_device_token', {
      data: requestData,
    });
  }

  public removeDeviceToken(
    requestData: deleteDeviceTokenRequest
  ): AxiosPromise<deleteDeviceTokenResponse> {
    return this.http.post('do_remove_device_token', {
      data: requestData,
    });
  }

  public registerDeviceNotifications(
    requestData: RegisterDeviceRequest
  ): AxiosPromise<RegisterDeviceResponse> {
    return this.http.post('notifications-do_register_device', {
      data: requestData,
    });
  }

  public updateNotificationViewed(
    requestData: SetNotificationAsViewedRequest
  ): AxiosPromise<SetNotificationAsViewedResponse> {
    return this.http.post('notifications-do_set_notification_as_viewed', {
      data: requestData,
    });
  }

  public sendNotification(
    requestData: NotificationCreationRequest
  ): AxiosPromise<NotificationCreationResponse> {
    return this.http.post('notifications-do_send_notification', {
      data: requestData,
    });
  }

  public deleteNotice(
    requestData: NoticeDeleteRequest
  ): AxiosPromise<NotificationDeleteResponse> {
    return this.http.post('notifications-do_remove_my_notifications', {
      data: requestData,
    });
  }

  public sendEmailToUser(
    requestData: SendEmailToChatUser
  ): AxiosPromise<NotificationSendToChatUserResponse> {
    return this.http.post('notifications-do_send_mail_to_chat_user', {
      data: requestData,
    });
  }
}

export default NotificationsApi;
