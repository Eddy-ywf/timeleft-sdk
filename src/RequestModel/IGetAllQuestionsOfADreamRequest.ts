export default interface GetAllQuestionsOfADreamRequest {
  dreamUid: string;
}

export default interface GetQuestionByUIdOfDreamRequest {
  dreamUid: string,
  questionUid: string
}