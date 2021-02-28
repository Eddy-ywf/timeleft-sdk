import { AxiosPromise } from 'axios';
import AbstractApi from './AbstractApi';
import { GetMyNotificationsRequest } from '../RequestModel/IGetMyNotificationsRequest';
import { GetMyNotificationsResponse } from '../ResponseModel/IGetMyNotificationsResponse';



class NotificationsApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getMyNotifications(requestData: GetMyNotificationsRequest): AxiosPromise<GetMyNotificationsResponse> {
    return this.http.post('notifications-do_get_my_notifications', {"data": requestData});
  }

}

export default NotificationsApi;
