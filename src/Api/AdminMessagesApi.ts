import { AxiosPromise } from 'axios';
import SendMessageToAdminRequest from '../RequestModel/ISendMessageToAdminRequest';
import SendMessageToAdminResponse from '../ResponseModel/ISendMessageToAdminResponse';
import AbstractApi from './AbstractApi';

class AdminMessagesApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public sendMessageToAdmin(requestData: SendMessageToAdminRequest): AxiosPromise<SendMessageToAdminResponse> {
    return this.http.post('messages-do_send_message_to_admin', {"data": requestData});
  }

}

export default AdminMessagesApi;
