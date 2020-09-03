import { Component, OnInit } from '@angular/core';
import { Polygon } from '../polygon.model';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  polygon: Polygon;
  data;
  cols: any[];

  constructor(
    private http: HttpClient,
    private store: Store<{ imas: any }>
  ) { }

  

  ngOnInit() {
    this.store.select('imas').subscribe((data) => {
      if (data) {
        this.data = data.data.forecastedPolygonlist;
      }
    });
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
