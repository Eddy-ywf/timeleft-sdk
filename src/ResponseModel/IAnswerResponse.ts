import LanguageResponse from "./ILanguageResponse";

export default interface AnswerResponse {
  uid: string;
  creationDate: string;
  content: LanguageResponse[];
}
