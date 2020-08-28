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
  needProbe : number =0;

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
         if(this.data[i].polygonStatus === "Healthy") {
           this.healthyCount = this.healthyCount+1;
         }
         if(this.data[i].polygonStatus === "Disposable") {
           this.disposable = this.disposable+1;
         }
         if(this.data[i].polygonStatus === "Needs to probe") {
          this.needProbe = this.needProbe+1;
        }
       }
       this.polygonStatus.setValues(this.healthyCount, this.disposable, this.needProbe);
     }
  }

  onClickRecord(event, el) {
    this.http.get("http://localhost:8080/downloadFile/" + el.id).subscribe(
      resData => {
        console.log("request sent");
      }
    );
  };

}
