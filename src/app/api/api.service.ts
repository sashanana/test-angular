import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiRequestOption, ApiRequest, ApiRequestResponse, ApiParameterCodec } from './models';

export class ApiService {

  constructor(
    private Host: string,
    private http: HttpClient
  ) { }

  public request( options: ApiRequestOption ): Observable<any> {
    const requestOptions = this.setHttpRequest(options);
    return this.http.request(
      requestOptions.method,
      requestOptions.url,
      requestOptions.options
    );
  }

  public async requestPromise( options: ApiRequestOption ): Promise<any> {
    const requestOptions = this.setHttpRequest(options);
    const response: HttpResponse<any> = await this.http.request(
      requestOptions.method,
      requestOptions.url,
      requestOptions.options
    ).toPromise() as HttpResponse<any>;
    return response;
  }

  /**
	 * Set HttpRequest object
	 */
  private setHttpRequest( opts: ApiRequestOption ): ApiRequest {
    const url = this.Host + opts.path;
    const method = opts.method ? opts.method : 'GET';
    //
    // Init
    //
    const allInit = this.setHttpRequestInit( opts );
    const contentType = allInit.headers.get('Content-Type');
    const body = ( contentType === 'application/x-www-form-urlencoded' )
                 ? { body: this.getParamsString( opts.body ) } : { body: opts.body };
    const options: {[key: string]: any} = { ...body, ...allInit } ;

    return {
      url,
      method,
      options
    };
  }

  /**
	 * Set HttpRequest init object
	 */
  private setHttpRequestInit( options: ApiRequestOption ): {[key: string]: any} {
    const init: {[key: string]: any} = {};

    //
    // Params
    //
    if ( options.params ) {
      const paramsOpts = options.params;
      let params = new HttpParams();
      for ( const key in paramsOpts ) {
        if ( paramsOpts.hasOwnProperty(key) ) {
           params = params.append(key, paramsOpts[key]);
        }
      }
      init.params = params;
    }

    //
    // Header
    //
    const headersOpts = options.headers;
    let headers = new HttpHeaders().set('Accept', 'application/json');

    if ( options.headers ) {
      for ( const key in headersOpts ) {
        if ( headersOpts.hasOwnProperty(key) ) {
           headers = headers.append(key, headersOpts[key]);
        }
      }
    }

    if ( !headers.has('Content-Type') ) {
       headers.append('Content-Type', 'application/json');
    }
    init.headers = headers;
    return init;
  }

  //
  // Parameters in string format
  //
  private getParamsString( body: {[key: string]: any}|string|null ): string {
    let paramsString = '';
    if (typeof body === 'object') {
      const codec = new ApiParameterCodec();

      let params = new HttpParams({
        encoder: codec
      });
      for ( const key in body ) {
        if ( body.hasOwnProperty(key) ) {
           params = params.append(key, body[key]);
        }
      }

      paramsString = params.toString();

    } else if (typeof body === 'string') {
      paramsString = body;
    }
    return paramsString;
  }

}