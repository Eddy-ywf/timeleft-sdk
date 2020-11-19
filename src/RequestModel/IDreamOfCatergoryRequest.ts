export default interface DreamsOfCategoryRequest {
  pageRequested: number;
  itemsPerPage: number;
  uid: string;
  orderBy: 'popularity' | 'date';
}
