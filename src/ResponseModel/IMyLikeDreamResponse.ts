import DreamResponse from './IDreamResponse';
import StandardPaginationResponse from './IStandardPaginationResponse';

export default interface LikedDreamsResponse {
  info: StandardPaginationResponse,
  data: DreamResponse[],
}