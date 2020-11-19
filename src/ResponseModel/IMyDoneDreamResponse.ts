import DreamResponse from "./IDreamResponse";
import StandardPaginationResponse from "./IStandardPaginationResponse";

export default interface DoneDreamsResponse {
  info: StandardPaginationResponse,
  data: DreamResponse[],
}