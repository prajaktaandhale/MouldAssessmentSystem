import { Component, OnInit } from '@angular/core';
import { Polygon } from '../polygon.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PolygonStatusService } from 'src/app/services/polygon-status.service';
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-today-assessment-tabel',
  templateUrl: './today-assessment-tabel.component.html',
  styleUrls: ['./today-assessment-tabel.component.css']
})
export class TodayAssessmentTabelComponent implements OnInit {
  polygon: Polygon;
  data: any[];
  response;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { }
  cars: any[];
  cols: any[];

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.data = data.data.assessedPolygonlist;
    });
    this.cols = [
      { field: 'sku', header: 'Sku' },
      { field: 'mouldId', header: 'Mould' },
      { field: 'category', header: 'Category' },
      { field: 'make', header: 'Make' },
      { field: 'location', header: 'Assembly Line Number' },
      { field: 'cyclesUsed', header: 'Cycles Used' },
      { field: 'assessDate', header: 'Assessment Date' },
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
