import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import CreateQuestionRequest from '../RequestModel/ICreateQuestionRequest';
import CreateQuestionResponse from '../ResponseModel/ICreateQuestionResponse';
import CreateAnswerRequest from '../RequestModel/ICreateAnswerRequest';
import CreateAnswerResponse from '../ResponseModel/ICreateAnswerResponse';

class QuestionAPI extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createQuestion(requestData: CreateQuestionRequest): AxiosPromise<CreateQuestionResponse> {
    return this.http.post('questions-do_create_question', {"data": requestData});
  }

  public createAnswer(requestData: CreateAnswerRequest): AxiosPromise<CreateAnswerResponse> {
    return this.http.post('questions-do_create_answer_to_question', requestData);
  }
}

export default QuestionAPI;
