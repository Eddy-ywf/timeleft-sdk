interface GetAllQuestionsOfADreamRequest {
  dreamUid: string;
}

interface GetQuestionByUIdOfDreamRequest {
  dreamUid: string,
  questionUid: string
}

export {
  GetQuestionByUIdOfDreamRequest,
  GetAllQuestionsOfADreamRequest
}