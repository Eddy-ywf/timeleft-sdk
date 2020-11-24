import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import InteractionRequest from '../RequestModel/IInteractionRequest';
import InteractionResponse from '../ResponseModel/IInteractionResponse';

class InteractionApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createInteraction(requestData: InteractionRequest): AxiosPromise<InteractionResponse> {
      return this.http.post('interactions-do_create_interaction', {"data": requestData});
  }
}

export default InteractionApi;
