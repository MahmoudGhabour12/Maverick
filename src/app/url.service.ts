import { Injectable } from '@angular/core';
import { UrlModel } from './urlModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  APIURL = 'http://localhost:3000/outcomeurl';

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get<UrlModel[]>(this.APIURL );
  }

  addurl(url: UrlModel) {
    return this.http.post(this.APIURL , url).subscribe();
  }

}
