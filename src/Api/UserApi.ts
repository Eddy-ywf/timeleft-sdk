import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import UserRequest from '../RequestModel/IUserProfileUpdateRequest';
import UserResponse from '../ResponseModel/IUserResponse';
import MyProfileResponse from '../ResponseModel/IMyProfileResponse';
import PublicProfileRequest from '../RequestModel/IPublicUserRequest';
import PublicProfileResponse from '../ResponseModel/IPublicUserResponse';
import SearchUsersRequest from '../RequestModel/ISearchUserRequest';
import SearchUsersResponse from '../ResponseModel/ISearchUserResponse';
import deleteUserRequest from '../RequestModel/IDeleteUserRequest';
import ISendMailRequest from '../RequestModel/ISendMailRequest';
import ISendMailResponse from '../ResponseModel/ISendMailResponse';
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

  public searchUser(requestData: SearchUsersRequest): AxiosPromise<SearchUsersResponse> {
    return this.http.get('algolia-do_search_user', { params: { ...requestData } }  );
  }

   // deleted account email password
  public deleteAccount(requestData: deleteUserRequest): AxiosPromise<any> {
    return this.http.post('user-do_delete_user', { data: requestData });
  }

  public sendMailToUser(
    requestData: ISendMailRequest
  ): AxiosPromise<ISendMailResponse> {
    return this.http.post('notifications-do_create_send_email', {
      data: { ...requestData }
    });
  }
}

export default UserApi;
