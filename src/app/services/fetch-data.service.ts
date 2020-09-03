import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  public data: any;
  listResponse;
  header: string;

  constructor(private http:HttpClient) { 
  }
  
  getMouldData() {
    return this.http.get('https://localhost:8080/getPolygonData').pipe(map((data: Data) => data));
  }

  setData(response) {
    this.data = response;
  }

  getData() {
    return this.data;
  }

  setHeaderName(header) {
    this.header = header;
  }

  getHeaderName() {
    return this.header;
  }


}
