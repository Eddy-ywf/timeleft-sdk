import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IUserProfileResponse from '../ResponseModel/IUserProfileResponse';
import UserRequest from '../RequestModel/IUserProfileUpdateRequest';
import MyProfileResponse from '../ResponseModel/IUserProfileResponse';

class UserApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getUserProfile(): AxiosPromise<IUserProfileResponse> {
    return this.http.post('do_get_my_profile', {"data":{}});
  }

  public updateUserProfile(requestData: UserRequest): AxiosPromise<MyProfileResponse> {
    return this.http.post('do_update_user', {"data": requestData});
  }
}

export default UserApi;
