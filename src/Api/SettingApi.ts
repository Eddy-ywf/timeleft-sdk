import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import GetNewsLetterSettingsResponse from '../ResponseModel/IGetNewsLetterSettingResponse';
import GetNotificationSettingsResponse from '../ResponseModel/IGetNotificationSettingResponse';
import SaveNotificationSettingsRequest from '../RequestModel/ISaveNotificationSettingRequest';
import SaveNotificationSettingsResponse from '../ResponseModel/ISaveNotificationSettingResponse';
import SaveNewsLetterSettingsRequest from '../RequestModel/ISaveNewsLetterSettingRequest';
import SaveNewsLetterSettingsResponse from '../ResponseModel/ISaveNewsLetterSettingResponse';

class SettingApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getNewsLetterSetting(): AxiosPromise<GetNewsLetterSettingsResponse> {
    return this.http.post('settings-do_get_newsletter_settings', {"data": {}});
  }

  public getNotificationSetting(): AxiosPromise<GetNotificationSettingsResponse> {
    return this.http.post('settings-do_get_notification_settings', {"data": {}});
  }

  public saveNotificationSetting(requestData: SaveNotificationSettingsRequest): AxiosPromise<SaveNotificationSettingsResponse> {
    return this.http.post('settings-do_save_notification_settings', {"data": requestData});
  }

  public saveNewsletterSetting(requestData: SaveNewsLetterSettingsRequest): AxiosPromise<SaveNewsLetterSettingsResponse> {
    return this.http.post('settings-do_save_newsletter_settings', {"data": requestData});
  }
}

export default SettingApi;
