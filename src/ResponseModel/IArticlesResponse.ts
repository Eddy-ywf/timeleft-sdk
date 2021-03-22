import LanguageResponse from './ILanguageResponse';

export default interface ArticlesResponse {
  uid: string;
  url: string;
  live: boolean;
  imageUrl: string
  description: LanguageResponse[];
  title: LanguageResponse[];
  creationDate: string;
}