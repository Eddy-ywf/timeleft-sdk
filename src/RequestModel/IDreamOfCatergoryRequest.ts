export default interface IDreamOfCatergoryRequest {
  pageRequested: number;
  itemsPerPage: number;
  uid: string;
  orderBy: 'popularity' | 'date';
}
