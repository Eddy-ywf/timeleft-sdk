import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';

class BlogApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getAllArticles(): AxiosPromise {
    return this.http.get('blog-do_get_all_articles?', {"data": {}});
  }
}

export default BlogApi;
