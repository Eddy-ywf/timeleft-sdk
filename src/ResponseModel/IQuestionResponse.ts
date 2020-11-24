import AnswerResponse from './IAnswerResponse';
import { UserPublic } from './IUserPublicResponse';

export default interface QuestionResponse {
  uid: string;
  dreamUid: string;
  owner: UserPublic;
  creationDate: string;
  text: string;
  upVotesTotal: number;
  downVotesTotal: number;
  answers: AnswerResponse[];
}
