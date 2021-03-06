import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import EmojiRequest from '../RequestModel/IEmojiRequest';
import EmojiResponse from '../ResponseModel/IEmojiResponse';
import GetEmojisResponse from '../ResponseModel/IGetEmojisResponse';
import AddFeelingRequest from '../RequestModel/IAddFeelingRequest';
import AddFeelingResponse from '../ResponseModel/IAddFeelingResponse';
import GetFeelingsOfDreamResponse from '../ResponseModel/IGetFeelingOfDreamResponse';
import EmojisCountersRequest from '../RequestModel/IEmojiCountersRequest';
import EmojisCountersResponse from '../ResponseModel/IEmojiCountersResponse';
import GetFeelingsOfDreamRequest from '../RequestModel/IGetFeelingOfDreamRequest';
import FeelingByUIdOfDreamRequest from '../RequestModel/IFeelingByUIdOfDreamRequest';
import { FeelingResponse } from '../ResponseModel/IFeelingResponse';

class FeelingApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createEmoji(requestData: EmojiRequest): AxiosPromise<EmojiResponse> {
    return this.http.post('feelings-do_create_emoji', {"data": requestData});
  }

  public getAllEmoji(): AxiosPromise<GetEmojisResponse> {
    return this.http.post('feelings-do_get_all_emojis', {"data": {}});
  }

  public addFeeling(requestData: AddFeelingRequest): AxiosPromise<AddFeelingResponse> {
    return this.http.post('feelings-do_add_feeling', {"data": requestData});
  }

  public getFeelingOfDream(requestData: GetFeelingsOfDreamRequest): AxiosPromise<GetFeelingsOfDreamResponse> {
    return this.http.post('feelings-do_get_feelings_of_dream', {"data": requestData});
  }

  public getFeelingByUidOfDream(requestData: FeelingByUIdOfDreamRequest): AxiosPromise<FeelingResponse> {
    return this.http.get('feelings-do_get_feeling_by_uid', {params: { ...requestData }});
  }

  public getEmojiCounters(requestData: EmojisCountersRequest): AxiosPromise<EmojisCountersResponse> {
    return this.http.post('feelings-do_get_emojis_counters', {"data": requestData});
  }
}

export default FeelingApi;
