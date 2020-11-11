import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IUserProfileResponse from '../ResponseModel/IUserProfileResponse';
import { IUserProfileUpdateRequest } from '../RequestModel/IUserProfileUpdateRequest';
import { IGeneralResponse } from '../ResponseModel/IErrorResponse';

class UserApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getUserProfile(): AxiosPromise<IUserProfileResponse> {
    return this.http.post('do_get_my_profile', {"data":{}});
  }

  public updateUserProfile(profileData: IUserProfileUpdateRequest): AxiosPromise<IGeneralResponse> {
    return this.http.put('user', profileData);
  }
}

export default UserApi;
