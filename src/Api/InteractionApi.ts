import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import InteractionRequest from '../RequestModel/IInteractionRequest';
import InteractionResponse from '../ResponseModel/IInteractionResponse';
import OrganisedUserInteractionsResponse from '../ResponseModel/IOrganisedUserInteractionsResponse';
import OrganisedUserInteractionsRequest from '../RequestModel/IGetInteractionsRequest';

class InteractionApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createInteraction(requestData: InteractionRequest): AxiosPromise<InteractionResponse> {
      return this.http.post('interactions-do_create_interaction', {"data": requestData});
  }

  public getAllInteractions(requestData: OrganisedUserInteractionsRequest): AxiosPromise<OrganisedUserInteractionsResponse> {
    return this.http.post('interactions-do_get_all_interactions_of_an_user', {"data": requestData});
  }
}

export default InteractionApi;
