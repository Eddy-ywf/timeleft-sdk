import AnswerMResponse from './IAnswerMResponse';
import { FeelingPartialResponse } from './IFeelingResponse';
import LanguageResponse from './ILanguageResponse';
import { UserPublic } from './IUserPublicResponse';

export interface UserInteractionResponse {
  user?: UserPublic;
  dream: DreamPartial;
  type:
    | 'askQuestion'
    | 'answerToQuestion'
    | 'addFeeling'
    | 'doneDream'
    | 'likeDream';
  questionText?: string;
  questionUid?: string;
  answerText?: string;
  allAnswers?: AnswerMResponse[];
  answerUid?: string;
  feeling?: FeelingPartialResponse;
  date: string;
  sentence?: string;
  uid?: string;
  questionUpvotes?: number;
  questionDownvotes?: number;
}

export interface DreamPartial {
  title: LanguageResponse[];
  dreamUid?: string;
}
