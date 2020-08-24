import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { HttpClient } from '@angular/common/http';
import { Polygon } from '../polygon.model';

import { map } from 'rxjs/operators';
import Data from './data.js';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  polygon: Polygon;
  polygonData: Polygon[];

  constructor(private http: HttpClient) { }


  // ngOnInit() {
  //   // this.http.get<Polygon[]>("http://localhost:8080/getPolygonData")
  //   // .subscribe(response => {
  //   //  this.polygonData = response;      
  //   // });

  //   this.polygonData = Data;
    

  // }
  cars: any[];

    cols: any[];

    

    ngOnInit() {
        //this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cars = [{
          vin: "abc",
          year: 2020,
          brand: "abc",
          color: "red"
        },
        {
          vin: "abc",
          year: 2020,
          brand: "abc",
          color: "red"
        }]
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }
  
  
    
  
  


}
