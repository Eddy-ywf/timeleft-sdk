import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IUserProfileResponse from '../ResponseModel/IUserProfileResponse';
import UserRequest from '../RequestModel/IUserProfileUpdateRequest';
import MyProfileResponse from '../ResponseModel/IUserProfileResponse';
import PublicProfileRequest from '../RequestModel/IPublicUserRequest';
import PublicProfileResponse from '../ResponseModel/IPublicUserResponse';

class UserApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getUserProfile(): AxiosPromise<IUserProfileResponse> {
    return this.http.post('user-do_get_my_profile', {"data":{}});
  }

  public updateUserProfile(requestData: UserRequest): AxiosPromise<MyProfileResponse> {
    return this.http.post('user-do_update_user', {"data": requestData});
  }

  public getUserByUid(requestData: PublicProfileRequest): AxiosPromise<PublicProfileResponse> {
    return this.http.post('user-do_get_profile_by_uid', {"data": requestData});
  }
}

export default UserApi;
