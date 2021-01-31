import LanguageResponse from "./ILanguageResponse";
import { UserPublic } from './IUserPublicResponse';

export default interface AnswerMResponse {
  questionUid: string;
  text: string;
  uid: string;
  dreamUid: string;
  owner: UserPublic;
  creationDate: string;
  content: LanguageResponse[];
}
