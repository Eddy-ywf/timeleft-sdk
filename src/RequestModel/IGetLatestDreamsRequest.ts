export default interface LatestDreamsRequest {
  itemsPerPage: number;
  pageRequested: number;
  userUid: string;
  orderBy: 'popularity' | 'date';
}
