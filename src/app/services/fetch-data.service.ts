import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Polygon } from '../components/home/polygon.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  data;

  constructor(private http:HttpClient) { 
  }

  
  // getMouldData() {
  //   this.http.get<Polygon[]>("http://localhost:8080/getPolygonData");
  // }

}
