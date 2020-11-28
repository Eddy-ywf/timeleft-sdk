import LanguageResponse from './ILanguageResponse';

export default interface CategoryResponse {
  uid: string;
  name: LanguageResponse[];
  length: number;
  creationDate: string;
}
