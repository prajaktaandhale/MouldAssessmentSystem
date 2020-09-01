import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Polygon } from '../components/home-page/polygon.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http:HttpClient) { 
  }

  getMouldData() {
    this.http.get<Polygon[]>("http://localhost:8080/getPolygonData");
  }

}
