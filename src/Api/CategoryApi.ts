import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import DreamsOfCategoryRequest from '../RequestModel/IDreamOfCatergoryRequest';
import DreamsOfCategoryResponse from '../ResponseModel/IDreamOfCategoryResponse';
import GetAllCategoriesResponse from '../ResponseModel/IGetAllCategoriesResponse';

class CategoryApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getDreamsOfCategory(requestData: DreamsOfCategoryRequest): AxiosPromise<DreamsOfCategoryResponse> {
    return this.http.post('do_get_all_dreams_of_category', {"data": requestData});
  }

  public getAllCategories(): AxiosPromise<GetAllCategoriesResponse> {
    return this.http.post('categories-do_get_all_categories', {"data": {}});
  }
}

export default CategoryApi;
