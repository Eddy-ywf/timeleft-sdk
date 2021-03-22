import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import ArticlesResponse from '../ResponseModel/IArticlesResponse';

class BlogApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getAllArticles(): AxiosPromise<ArticlesResponse> {
    return this.http.get('blog-do_get_all_articles?', {"data": {}});
  }
}

export default BlogApi;
