import LanguageResponse from './ILanguageResponse';

export default interface CategoryResponse {
  uid: string;
  name: LanguageResponse[];
  image: string;
  length: number;
  creationDate: string;
}
