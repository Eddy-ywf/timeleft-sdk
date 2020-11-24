import DreamResponse from './IDreamResponse';
import StandardPaginationResponse from './IStandardPaginationResponse';

export default interface ShuffleResponse {
  info: StandardPaginationResponse;
  data: DreamResponse[];
}
