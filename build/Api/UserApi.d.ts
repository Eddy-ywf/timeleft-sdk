import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IUserProfileResponse from '../ResponseModel/IUserProfileResponse';
import { IUserProfileUpdateRequest } from '../RequestModel/IUserProfileUpdateRequest';
import { IGeneralResponse } from '../ResponseModel/IErrorResponse';
declare class UserApi extends AbstractApi {
    getUserProfile(): AxiosPromise<IUserProfileResponse>;
    updateUserProfile(profileData: IUserProfileUpdateRequest): AxiosPromise<IGeneralResponse>;
}
export default UserApi;
