import { UserPublic } from './IUserPublicResponse';

export default interface AnswerResponse {
  uid: string;
  creationDate: string;
  text: string;
  dreamUid: string;
  questionUid: string;
  owner: UserPublic;
}
