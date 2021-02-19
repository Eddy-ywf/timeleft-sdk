import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import CreateQuestionRequest from '../RequestModel/ICreateQuestionRequest';
import CreateQuestionResponse from '../ResponseModel/ICreateQuestionResponse';
import CreateAnswerRequest from '../RequestModel/ICreateAnswerRequest';
import CreateAnswerResponse from '../ResponseModel/ICreateAnswerResponse';
import { GetAllQuestionsOfADreamRequest } from '../RequestModel/IGetAllQuestionsOfADreamRequest';
import QuestionResponse from '../ResponseModel/IQuestionResponse';

class QuestionApi extends AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public createQuestion(requestData: CreateQuestionRequest): AxiosPromise<CreateQuestionResponse> {
    return this.http.post('questions-do_create_question', {"data": requestData});
  }

  public createAnswer(requestData: CreateAnswerRequest): AxiosPromise<CreateAnswerResponse> {
    return this.http.post('questions-do_create_answer_to_question', {"data": requestData});
  }

  public getQuestionsOfDream(requestData: GetAllQuestionsOfADreamRequest): AxiosPromise<QuestionResponse[]> {
    return this.http.get('questions-do_get_question_by_uid', {params: { ...requestData }});
  }

  public getQuestionByUidOfDream(requestData: GetAllQuestionsOfADreamRequest): AxiosPromise<QuestionResponse> {
    return this.http.get('questions-do_get_all_questions_of_a_dream', {params: { ...requestData }});
  }
}

export default QuestionApi;
