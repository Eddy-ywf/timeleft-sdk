import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import IDreamsOfCategoryRequest from '../RequestModel/IDreamOfCatergoryRequest';
import IDreamsOfCategoryResponse from '../ResponseModel/IDreamOfCategoryResponse';

class CategoryApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getDreamByCategory(requestData: IDreamsOfCategoryRequest): AxiosPromise<IDreamsOfCategoryResponse> {
    return this.http.post('do_get_all_dreams_of_category', {"data": requestData});
  }
}

export default CategoryApi;
