import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import UserRequest from '../RequestModel/IUserProfileUpdateRequest';
import UserResponse from '../ResponseModel/IUserResponse';
import MyProfileResponse from '../ResponseModel/IMyProfileResponse';
import PublicProfileRequest from '../RequestModel/IPublicUserRequest';
import PublicProfileResponse from '../ResponseModel/IPublicUserResponse';

class UserApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getUserProfile(): AxiosPromise<MyProfileResponse> {
    return this.http.post('user-do_get_my_profile', {"data": {}});
  }

  public updateUserProfile(requestData: UserRequest): AxiosPromise<UserResponse> {
    return this.http.post('user-do_update_user', {"data": requestData});
  }

  public getUserByUid(requestData: PublicProfileRequest): AxiosPromise<PublicProfileResponse> {
    return this.http.post('user-do_get_profile_by_uid', {"data": requestData});
  }
}

export default UserApi;
