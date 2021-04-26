import Axios, { AxiosInstance } from 'axios';
import Environment from '../Enum/Environment';
import { endPoint } from '../FirebaseConfig/env';
// import { transformRequest, transformResponse } from '../Utility/DataTransformUtility';

abstract class AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Protected Properties
  // --------------------------------------------------------------------------------------------

  /**
   * The HTTP Client
   * Use this to init all HTTP functionality
   */
  protected readonly http: AxiosInstance;

  // --------------------------------------------------------------------------------------------
  // Private Properties will correct all later
  // --------------------------------------------------------------------------------------------

  private readonly ENDPOINT_DEV: string = endPoint.development;
  private readonly ENDPOINT_LIVE: string = endPoint.production;

  // --------------------------------------------------------------------------------------------
  // Magic methods
  // --------------------------------------------------------------------------------------------

  /**
   * @since v2.0.0
   */
  public constructor(env: string, authorization?: string) {
    let baseUrl: string;

    switch (env) {
      case Environment.DEVELOPMENT:
        baseUrl = this.ENDPOINT_DEV;
        break;
      case Environment.PRODUCTION:
        baseUrl = this.ENDPOINT_LIVE;
        break;
      default:
        throw new Error(`Invalid env "${env}" value`);
    }

    let headers = {};

    if (typeof authorization !== 'undefined') {
      headers = {
        ...headers,
        authorization,
      };
    }

    this.http = Axios.create({
      baseURL: `${baseUrl}/`,
      headers,
      // transformRequest,
      // transformResponse
    });
  }

  // --------------------------------------------------------------------------------------------
  // Protected methods
  // --------------------------------------------------------------------------------------------

  protected static padLeft(num: number, maxLength: number): string {
    return String('0'.repeat(maxLength) + num.toString())
      .slice(-maxLength);
  }

  /**
   * @deprecated remove and use Moment format or create utility to uniform the result
   */
  protected static getDateInFormat(dateTime: Date): string {
    return dateTime
      .getFullYear()
      .toString() + '-' +
      AbstractApi.padLeft(dateTime.getMonth() + 1, 2)
        .toString() + '-' +
      AbstractApi.padLeft(dateTime.getDate(), 2)
        .toString() +
      'T' +
      AbstractApi.padLeft(dateTime.getHours(), 2)
        .toString() + ':' +
      AbstractApi.padLeft(dateTime.getMinutes(), 2)
        .toString() + ':' +
      AbstractApi.padLeft(dateTime.getSeconds(), 2)
        .toString();
  }
}

export default AbstractApi;
