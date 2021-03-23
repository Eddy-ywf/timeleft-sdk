import { AxiosPromise } from 'axios';
import DislikeRequest from '../RequestModel/IDislikeDreamRequest';
import DoneRequest from '../RequestModel/IDoneDreamRequest';
import DreamRequest from '../RequestModel/IDreamRequest';
import GetDreamByUidRequest from '../RequestModel/IGetDreamByUidRequest';
import LatestDreamsRequest from '../RequestModel/IGetLatestDreamsRequest';
import PopularDreamsRequest from '../RequestModel/IGetPopularDreamsRequest';
import LikeRequest from '../RequestModel/ILikeDreamRequest';
import DoneDreamsRequest from '../RequestModel/IMyDoneDreamRequest';
import LikedDreamsRequest from '../RequestModel/IMyLikeDreamRequest';
import SearchDreamsRequest from '../RequestModel/ISearchDreamRequest';
import ShuffleRequest from '../RequestModel/IShuffleRequest';
import DislikeResponse from '../ResponseModel/IDislikeDreamResponse';
import DoneDreamResponse from '../ResponseModel/IDoneDreamResponse';
import DreamResponse from '../ResponseModel/IDreamResponse';
import EasyResponse from '../ResponseModel/IEasyDreamResponse';
import FullDreamResponse from '../ResponseModel/IFullDreamResponse';
import GetDreamByUidResponse from '../ResponseModel/IGetDreamByUidResponse';
import LatestDreamsResponse from '../ResponseModel/IGetLatestDreamsResponse';
import LikeResponse from '../ResponseModel/ILikeDreamResponse';
import LikedDreamsResponse from '../ResponseModel/IMyLikeDreamResponse';
import SearchDreamsResponse from '../ResponseModel/ISearchDreamResponse';
import ShuffleResponse from '../ResponseModel/IShuffleResponse';
import AbstractApi from './AbstractApi';

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
    return this.http.post('dreams-do_get_my_done_dreams', { "data": requestData });
  }

  public getShuffle(requestData: ShuffleRequest): AxiosPromise<ShuffleResponse> {
    let categoriesUid: string | string[] = requestData.categoriesUid;

    if (requestData.categoriesUid.length === 0) {
      categoriesUid = '';
    }

    return this.http.get('dreams-do_get_shuffle', { params: { ...requestData, categoriesUid } });
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

  public getPopularDreamsOfWeek(requestData: PopularDreamsRequest): AxiosPromise<FullDreamResponse[]> {
    return this.http.get('dreams-do_get_popular_dreams_of_the_week', { params: { ...requestData } });
  }

  public searchDream(requestData: SearchDreamsRequest): AxiosPromise<SearchDreamsResponse> {
    return this.http.get('algolia-do_search_dream', { params: { ...requestData } })
  }
}

export default DreamApi;
