import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Quote } from './quote';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuoteService {
  quoteUrl = "http://quotesondesign.com/wp-json/posts?orgin=*&filter[orderby]=rand&q=";
  //http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1
  headers: Headers = new Headers([
    { 'Access-Control-Allow-Origin': '*' },
    { 'Access-Control-Allow-Headers': 'Origin, *, Content-Type, Accept' }]);
  options: RequestOptions = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  getQuote(count): Promise<Quote> {
    return this.http.get(this.quoteUrl + count).toPromise()
      .then(response => response.json() as Quote);
  }
}
