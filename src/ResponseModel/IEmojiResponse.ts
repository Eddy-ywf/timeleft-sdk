import LanguageResponse from "./ILanguageResponse";

export default interface EmojiResponse {
  uid: string;
  creationDate: string;
  icon: string;
  content: LanguageResponse[];
}