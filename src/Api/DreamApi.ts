import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import DreamRequest from '../RequestModel/IDreamRequest';
import DreamResponse from '../ResponseModel/IDreamResponse';
import LikeRequest from '../RequestModel/ILikeDreamRequest';
import LikeResponse from '../ResponseModel/ILikeDreamResponse';
import DislikeRequest from '../RequestModel/IDislikeDreamRequest';
import DislikeResponse from '../ResponseModel/IDislikeDreamResponse';
import DoneRequest from '../RequestModel/IDoneDreamRequest';
import DoneDreamResponse from '../ResponseModel/IDoneDreamResponse';
import LikedDreamsRequest from '../RequestModel/IMyLikeDreamRequest';
import LikedDreamsResponse from '../ResponseModel/IMyLikeDreamResponse';
import DoneDreamsRequest from '../RequestModel/IMyDoneDreamRequest';
import ShuffleRequest from '../RequestModel/ISuffleRequest';
import ShuffleResponse from '../ResponseModel/IShuffleResponse';
import EasyResponse from '../ResponseModel/IEasyDreamResponse';
import GetDreamByUidRequest from '../RequestModel/IGetDreamByUidRequest';
import GetDreamByUidResponse from '../ResponseModel/IGetDreamByUidResponse';

class DreamApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createDream(requestData: DreamRequest): AxiosPromise<DreamResponse> {
    return this.http.post('do_create_dream', {"data": requestData});
  }

  public likeDream(requestData: LikeRequest): AxiosPromise<LikeResponse> {
    return this.http.post('do_like_dream', {"data": requestData});
  }

  public dislikeDream(requestData: DislikeRequest): AxiosPromise<DislikeResponse> {
    return this.http.post('do_dislike_dream', {"data": requestData});
  }

  public makeDreamDone(requestData: DoneRequest): AxiosPromise<DoneDreamResponse> {
    return this.http.post('do_declare_dream_done', {"data": requestData});
  }

  public getMyLikeDreams(requestData: LikedDreamsRequest): AxiosPromise<LikedDreamsResponse> {
    return this.http.post('do_get_liked_dreams', {"data": requestData});
  }

  public getMyDoneDreams(requestData: DoneDreamsRequest): AxiosPromise<DoneDreamResponse> {
    return this.http.post('do_get_done_dreams', {"data": requestData});
  }

  public getShuffle(requestData: ShuffleRequest): AxiosPromise<ShuffleResponse> {
    return this.http.post('do_get_shuffle', {"data": requestData});
  }

  public getEasyDream(): AxiosPromise<EasyResponse> {
    return this.http.post('dreams-do_get_easy_dreams', {"data": {}});
  }

  public getDreamByUid(requestData: GetDreamByUidRequest): AxiosPromise<GetDreamByUidResponse> {
    return this.http.post('dreams-do_get_dream_by_uid', {"data": requestData});
  }
}

export default DreamApi;
