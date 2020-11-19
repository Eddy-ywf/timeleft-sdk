import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import ChangePasswordRequest from '../RequestModel/IChangePasswordRequest';
import ChangePasswordResponse from '../ResponseModel/IChangePasswordResponse';

class AuthAPI extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public changePassword(requestData: ChangePasswordRequest): AxiosPromise<ChangePasswordResponse> {
    return this.http.post('auth-do_change_password', {"data": requestData});
  }
}

export default AuthAPI;
