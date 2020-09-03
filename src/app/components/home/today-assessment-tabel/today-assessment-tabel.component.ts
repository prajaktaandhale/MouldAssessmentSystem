import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-today-assessment-tabel',
  templateUrl: './today-assessment-tabel.component.html',
  styleUrls: ['./today-assessment-tabel.component.css']
})
export class TodayAssessmentTabelComponent implements OnInit {
  data: any[];
  cols: any[];
  params: any;
  cards: any[] = [];

  constructor(
    private http: HttpClient,
    private store: Store<{ imas: any }>
  ) { }

  ngOnInit() {
    this.store.select('imas').subscribe((data) => {
      if (data) {
        this.data = data.data.assessedPolygonlist;
        this.calculateParams();
      }
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

  private calculateParams() {
    this.params = {
      healthy: 0,
      needProbe: 0,
      disposable: 0
    }
    this.data.forEach(el => {
      switch (el.polygonStatus.toLowerCase()) {
        case 'healthy':
          this.params.healthy = this.params.healthy + 1;
          break;
        case 'needs to probe':
          this.params.needProbe = this.params.needProbe + 1;
          break;
        case 'disposable':
          this.params.disposable = this.params.disposable + 1;
          break;                
      }
    });
    this.createCards();
  }

  createCards() {
    this.cards = [
      { label: 'Healthy', class: 'fa fa-check-circle-o fa-6x custom-icon healthy-color', param: this.params.healthy },
      { label: 'Need Probe', class: 'fa fa-search fa-6x custom-icon probe-color', param: this.params.needProbe },
      { label: 'Disposable', class: 'fa fa-trash fa-6x custom-icon disposable-color', param: this.params.disposable }
    ]
  }

  onClickRecord(event, el) {
    this.http.get("http://localhost:8080/downloadFile/" + el.id).subscribe(
      resData => {
        console.log("request sent");
      }
    );
  };

}
