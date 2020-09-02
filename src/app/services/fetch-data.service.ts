import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Polygon } from '../components/home/polygon.model';
import { PolygonStatusService } from '../services/polygon-status.service';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  data;
  listResponse;

  constructor(private http:HttpClient, private polygonStatus: PolygonStatusService) { 
  }

  
  getMouldData() {
    let promise = this.http.get<any>("http://localhost:8080/getPolygonData");
    return promise;
    
  }

  setData(response) {
    this.data = response;
  }

  getData() {
    return this.data;
  }


}
