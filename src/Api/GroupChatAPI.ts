import { AxiosPromise } from 'axios';
import AbstractApi from './AbstractApi';
import { GroupChatResponse, ResultWrapper } from '../ResponseModel/GroupChatResponse';
import { GroupChatRequest } from '../RequestModel/groupChatRequest/groupChat.request';

class GroupChatAPI extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------
  public getGroupChat(
    groupChatPayload: GroupChatRequest
  ): AxiosPromise<ResultWrapper<GroupChatResponse>> {
    return this.http.post('groups-do_get_group_chat', {
      data: groupChatPayload
    });
  }
}

export default GroupChatAPI;
