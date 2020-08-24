import { Component, OnInit } from '@angular/core';
import { Polygon } from '../polygon.model';
import Data from './data.js';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  polygon: Polygon;
  data: Polygon[];

  constructor() { }
  cars: any[];
  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'batchNumber', header: 'Batch Number' },
      { field: 'make', header: 'Make' },
      { field: 'cycles', header: 'Cycles' }
    ];
    this.data = Data;
  }

}
