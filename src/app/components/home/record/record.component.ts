import { Component, OnInit } from '@angular/core';
import { Polygon } from '../polygon.model';
import { HttpClient } from '@angular/common/http';
import { PolygonStatusService } from 'src/app/services/polygon-status.service';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  polygon: Polygon;
  data;

  constructor(private http: HttpClient,
    private polygonStatus: PolygonStatusService,
    private fetchData: FetchDataService
  ) { }
  cols: any[];
  

  ngOnInit() {
    const response = this.fetchData.getData();
    console.log()
    if (response) {
      this.data = response.forecastedPolygonlist;
      console.log('record', this.data);
    }
    this.cols = [
      { field: 'sku', header: 'Sku' },
      { field: 'mouldId', header: 'Mould' },
      { field: 'category', header: 'Category' },
      { field: 'manufacturor', header: 'Make' },
      { field: 'assemblyLineNumber', header: 'Assembly Line Number' },
      { field: 'cycles', header: 'Cycles Used' },
      { field: 'assessmentDate', header: 'Assessment Date' },
      { field: 'polygonStatus', header: 'Status' },
    ];
  }

  onClickRecord(event, el) {
    this.http.get("http://localhost:8080/downloadFile/" + el.id).subscribe(
      resData => {
        console.log("request sent");
      }
    );
  };

}
