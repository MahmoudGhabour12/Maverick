import { Injectable } from '@angular/core';
import { ParaModel } from './paraModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParaService {

  APIURL = 'http://localhost:3000/outcompara';

  constructor(private http: HttpClient) { }

  getpara() {
    return this.http.get<ParaModel[]>(this.APIURL );
  }

  AddMypara(para: ParaModel) {
    return this.http.post(this.APIURL , para).subscribe();
  }
}
