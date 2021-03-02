import DreamResponse from './IDreamResponse';
import LanguageResponse from './ILanguageResponse';

export default interface DreamsOfCategoryResponse {
  uid: string;
  name: LanguageResponse[];
  length: number;
  creationDate: string;
  dreams: DreamResponse[];
  currentPage: number;
  maxPage: number;
}
