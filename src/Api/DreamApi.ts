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
import ShuffleRequest from '../RequestModel/IShuffleRequest';
import ShuffleResponse from '../ResponseModel/IShuffleResponse';
import EasyResponse from '../ResponseModel/IEasyDreamResponse';
import GetDreamByUidRequest from '../RequestModel/IGetDreamByUidRequest';
import GetDreamByUidResponse from '../ResponseModel/IGetDreamByUidResponse';
import LatestDreamsRequest from '../RequestModel/IGetLatestDreamsRequest';
import LatestDreamsResponse from '../ResponseModel/IGetLatestDreamsResponse';
import PopularDreamsRequest from '../RequestModel/IGetPopularDreamsRequest';
import PopularDreamsResponse from '../ResponseModel/IGetPopularDreamsResponse';
import SearchDreamsRequest from '../RequestModel/ISearchDreamRequest';
import SearchDreamsResponse from '../ResponseModel/ISearchDreamResponse';

class DreamApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createDream(requestData: DreamRequest): AxiosPromise<DreamResponse> {
    return this.http.post('dreams-do_create_dream', { "data": requestData });
  }

  public likeDream(requestData: LikeRequest): AxiosPromise<LikeResponse> {
    return this.http.post('dreams-do_like_dream', { "data": requestData });
  }

  public dislikeDream(requestData: DislikeRequest): AxiosPromise<DislikeResponse> {
    return this.http.post('dreams-do_dislike_dream', { "data": requestData });
  }

  public makeDreamDone(requestData: DoneRequest): AxiosPromise<DoneDreamResponse> {
    return this.http.post('dreams-do_declare_dream_done', { "data": requestData });
  }

  public getMyLikeDreams(requestData: LikedDreamsRequest): AxiosPromise<LikedDreamsResponse> {
    return this.http.post('dreams-do_get_liked_dreams', { "data": requestData });
  }

  public getMyDoneDreams(requestData: DoneDreamsRequest): AxiosPromise<DoneDreamResponse> {
    return this.http.post('dreams-do_get_done_dreams', { "data": requestData });
  }

  public getShuffle(requestData: ShuffleRequest): AxiosPromise<ShuffleResponse> {
    return this.http.get('dreams-do_get_shuffle', { params: { ...requestData } });
  }

  public getEasyDream(): AxiosPromise<EasyResponse> {
    return this.http.post('dreams-do_get_easy_dreams', { "data": {} });
  }

  public getDreamByUid(requestData: GetDreamByUidRequest): AxiosPromise<GetDreamByUidResponse> {
    return this.http.get('dreams-do_get_dream_by_uid',  { params: { ...requestData } });
  }

  public getLatestDreams(requestData: LatestDreamsRequest): AxiosPromise<LatestDreamsResponse> {
    return this.http.get('dreams-do_get_latest_dreams', { params: { ...requestData } });
  }

  public getPopularDreamsOfWeek(requestData: PopularDreamsRequest): AxiosPromise<PopularDreamsResponse> {
    return this.http.get('dreams-do_get_popular_dreams_of_the_week', { params: { ...requestData } });
  }

  public searchDream(requestData: SearchDreamsRequest): AxiosPromise<SearchDreamsResponse> {
    return this.http.get('algolia-do_search_dream', { params: { ...requestData } })
  }
}

export default DreamApi;
