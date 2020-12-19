import { FeelingPartialResponse } from './IFeelingResponse';
import LanguageResponse from './ILanguageResponse';
import { UserPartial } from './IUserPublicResponse';

export interface UserInteractionResponse {
  user?: UserPartial;
  dream: DreamPartial;
  type:
    | 'askQuestion'
    | 'answerToQuestion'
    | 'addFeeling'
    | 'doneDream'
    | 'likeDream';
  questionText?: string;
  answerText?: string;
  feeling?: FeelingPartialResponse;
  date: string;
  sentence?: string;
  uid?: string;
}

export interface DreamPartial {
  title: LanguageResponse[];
}
