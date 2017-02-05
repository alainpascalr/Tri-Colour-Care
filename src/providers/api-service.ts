import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiConfig} from "./api-config";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
@Injectable()
export class ApiService {

  constructor (private http: Http) { }

  get(path: string): Promise<any> {
    return this.http
      .get([ApiConfig.testGivenURL, path].join('/'), { headers })
      .map((res) => res.json())
      .toPromise();
  }

  /**
   * Send a POST request to the server.
   * @param path, the path to the server.
   * @param body, the body of the request.
   */
  post(path: string, body: any): Promise<any> {
    return this.http
      .post([ApiConfig.testGivenURL, path].join('/'), JSON.stringify(body), { headers })
      .map((res) => res.json())
      .toPromise();
  }

}
