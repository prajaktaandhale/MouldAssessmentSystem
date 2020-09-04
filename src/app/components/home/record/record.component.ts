import { Component, OnInit } from '@angular/core';
import { Polygon } from '../polygon.model';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { FetchDataService } from '../../../services/fetch-data.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  polygon: Polygon;
  data;
  cols: any[];
  headerName: string;

  constructor(
    private http: HttpClient,
    private store: Store<{ imas: any }>,
    private fetchService: FetchDataService
  ) { }

  

  ngOnInit() {
    this.store.select('imas').subscribe((data) => {
      if (data) {
        this.data = data.data.forecastedPolygonlist;
      }
    });
    this.cols = [
      { field: 'sku', header: 'SKU' },
      { field: 'mouldId', header: 'Mould' },
      { field: 'category', header: 'Category' },
      { field: 'manufacturor', header: 'Make' },
      { field: 'assemblyLineNumber', header: 'Assembly Line Number' },
      { field: 'cycles', header: 'Cycles Used' },
      { field: 'assessmentDate', header: 'Assessment Date' },
      { field: 'decommissionDate', header: 'Decommission Date' },
    ];
    this.headerName = this.fetchService.getHeaderName();
  }
}
