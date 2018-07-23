/* Request option read by the service */
export class ApiRequestOption {
  public path: string;
  public method?: 'DELETE'|'GET'|'HEAD'|'JSONP'|'OPTIONS'|'POST'|'PUT';
  public body?: {[key: string]: any}|string|null;
  public params?: {[key: string]: any};
  public headers?: {[key: string]: any};
  public configs?: {[key: string]: any};
}
/* Request object to http client */
export class ApiRequest {
  public url: string;
  public method?: 'DELETE'|'GET'|'HEAD'|'JSONP'|'OPTIONS'|'POST'|'PUT';
  public options?: {[key: string]: any};
}