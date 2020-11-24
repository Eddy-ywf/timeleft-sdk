export default interface InteractionRequest {
  action: 'up' | 'down';
  targetUid: string;
  type: 'question' | 'feeling';
  dreamUid: string;
}
