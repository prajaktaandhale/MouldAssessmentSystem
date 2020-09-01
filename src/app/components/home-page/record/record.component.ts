import { Component, OnInit } from '@angular/core';
import { Polygon } from '../polygon.model';
import Data from './data.js';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PolygonStatusService } from 'src/app/services/polygon-status.service';
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  polygon: Polygon;
  data;response;
  // tableData : Observable<Polygon>;

  constructor(private http: HttpClient,private polygonStatus: PolygonStatusService, private fetchData: FetchDataService ) { }
  cols: any[];
  

  ngOnInit() {
    //this.tableData =  this.fetchData.getMouldData();
    this.response = this.polygonStatus.getData();
    this.data = this.response.forecastedPolygonlist;
     this.cols = [
      { field: 'sku', header: 'Mould ID' },
      { field: 'category', header: 'Category' },
      { field: 'manufacturor', header: 'Manufacturer' },
      { field: 'assessmentDate', header: 'Assessment Date' },
      { field: 'dicommisionDate', header: 'Termination Date' },
    ];
     //this.data = Data;
     
  }

  onClickRecord(event, el) {
    this.http.get("http://localhost:8080/downloadFile/" + el.id).subscribe(
      resData => {
        console.log("request sent");
      }
    );
  };

}
