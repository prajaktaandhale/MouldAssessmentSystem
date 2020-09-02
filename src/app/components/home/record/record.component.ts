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
      { field: 'sku', header: 'Mould ID' },
      { field: 'category', header: 'Category' },
      { field: 'manufacturor', header: 'Manufacturer' },
      { field: 'assessmentDate', header: 'Assessment Date' },
      { field: 'dicommisionDate', header: 'Termination Date' },
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
