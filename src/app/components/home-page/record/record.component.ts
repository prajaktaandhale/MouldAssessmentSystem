import { Component, OnInit } from '@angular/core';
import { Polygon } from '../polygon.model';
import Data from './data.js';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PolygonStatusService } from 'src/app/services/polygon-status.service';
import { ɵAnimationGroupPlayer } from '@angular/animations';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  polygon: Polygon;
  data: Polygon[] = [];
  healthyCount: number = 0;
  disposable : number =0;

  constructor(private http: HttpClient,private polygonStatus: PolygonStatusService ) { }
  cars: any[];
  cols: any[];

  ngOnInit() {
     this.http.get<Polygon[]>("http://localhost:8080/getPolygonData")
     .subscribe(response => {
       this.data = response;
     });
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'batchNumber', header: 'Batch Number' },
      { field: 'make', header: 'Make' },
      { field: 'cycles', header: 'Cycles' }
    ];
     //this.data = Data;
     if(this.data != undefined) {
     for (let i=0; i<this.data.length; i++) {
         if(this.data[i].polygonStatus === "healthy") {
           this.healthyCount = this.healthyCount+1;
         }
         if(this.data[i].polygonStatus === "disposable") {
           this.disposable = this.disposable+1;
         }
       }
       this.polygonStatus.setValues(this.healthyCount, this.disposable);
     }
    
    // this.data[0] = {
    //   "id": 3,
    //   "name": "Cube",
    //   "category": "Cube",
    //   "batchNumber": null,
    //   "make": null,
    //   "cycles": null,
    //   "fileData": "cGx5DQpmb3JtYXQgYXNjaWkgMS4wDQplbGVtZW50IHZlcnRleCAxMzM1DQpwcm9wZXJ0eSBmbG9hdCB4DQpwcm9wZXJ0eSBmbG9hdCB5DQpwcm9wZXJ0eSBmbG9hdCB6DQpwcm9wZXJ0eSB1Y2hhciByZWQNCnByb3BlcnR5IHVjaGFyIGdyZWVuDQpwcm9wZXJ0eSB1Y2hhciBibHVlDQplbGVtZW50IGZhY2UgMjQ1Mg0KcHJvcGVydHkgbGlzdCB1Y2hhciBpbnQgdmVydGV4X2luZGljZXMNCmVuZF9oZWFkZXINCjg5Ni45OTQgNDguNzYwMSA4Mi4yNjU2MiAgMjU1IDAgMA0KOTA2LjU5MyA0OC43NjAxIDgwLjc0",
    //   "polygonStatus": "disposable"
    // }
    // this.data[1] = {
    //   "id": 3,
    //   "name": "Cube",
    //   "category": "Cube",
    //   "batchNumber": null,
    //   "make": null,
    //   "cycles": null,
    //   "fileData": "cGx5DQpmb3JtYXQgYXNjaWkgMS4wDQplbGVtZW50IHZlcnRleCAxMzM1DQpwcm9wZXJ0eSBmbG9hdCB4DQpwcm9wZXJ0eSBmbG9hdCB5DQpwcm9wZXJ0eSBmbG9hdCB6DQpwcm9wZXJ0eSB1Y2hhciByZWQNCnByb3BlcnR5IHVjaGFyIGdyZWVuDQpwcm9wZXJ0eSB1Y2hhciBibHVlDQplbGVtZW50IGZhY2UgMjQ1Mg0KcHJvcGVydHkgbGlzdCB1Y2hhciBpbnQgdmVydGV4X2luZGljZXMNCmVuZF9oZWFkZXINCjg5Ni45OTQgNDguNzYwMSA4Mi4yNjU2MiAgMjU1IDAgMA0KOTA2LjU5MyA0OC43NjAxIDgwLjc0",
    //   "polygonStatus": "disposable"
    // }

  }

  onClickRecord(event, el) {
    this.http.get("http://localhost:8080/" + el.id).subscribe(
      resData => {
        console.log("request sent");
      }
    );
  };

}
