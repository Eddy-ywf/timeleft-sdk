import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import EmojiRequest from '../RequestModel/IEmojiRequest';
import EmojiResponse from '../ResponseModel/IEmojiResponse';
import GetEmojisResponse from '../ResponseModel/IGetEmojisResponse';
import AddFeelingRequest from '../RequestModel/IAddFeelingRequest';
import GetFeelingsOfDreamResponse from '../ResponseModel/IGetFeelingOfDreamResponse';
import EmojisCountersRequest from '../RequestModel/IEmojiCountersRequest';
import EmojisCountersResponse from '../ResponseModel/IEmojiCountersResponse';
import GetFeelingsOfDreamRequest from '../RequestModel/IGetFeelingOfDream';

class FeelingAPI extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createEmoji(requestData: EmojiRequest): AxiosPromise<EmojiResponse> {
    return this.http.post('feelings-do_create_emoji', {"data": requestData});
  }

  public getAllEmoji(): AxiosPromise<GetEmojisResponse> {
    return this.http.post('feelings-do_get_all_emojis', {"data": {}});
  }

  public addFeeling(requestData: AddFeelingRequest): AxiosPromise<GetFeelingsOfDreamResponse> {
    return this.http.post('feelings-do_add_feeling', {"data": requestData});
  }

  public getFeelingOfDream(requestData: GetFeelingsOfDreamRequest): AxiosPromise<GetFeelingsOfDreamResponse> {
    return this.http.post('feelings-do_get_feelings_of_dream', {"data": requestData});
  }

  public getEmojiCounters(requestData: EmojisCountersRequest): AxiosPromise<EmojisCountersResponse> {
    return this.http.post('feelings-do_get_emojis_counters', {"data": requestData});
  }
}

export default FeelingAPI;
