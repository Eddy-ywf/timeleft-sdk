import { AxiosInstance } from 'axios';
declare abstract class AbstractApi {
    protected readonly http: AxiosInstance;
    private readonly ENDPOINT_DEV;
    private readonly ENDPOINT_STAGING;
    private readonly ENDPOINT_LIVE;
    private readonly MOCK_LOCAL;
    private readonly MOCK_ONLINE;
    constructor(env: string, token?: string);
    protected static padLeft(num: number, maxLength: number): string;
    protected static getDateInFormat(dateTime: Date): string;
}
export default AbstractApi;
