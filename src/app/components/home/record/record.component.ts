import { Component, OnInit } from '@angular/core';
import { Polygon } from '../polygon.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fileSaver from 'file-saver';
import {Observable} from 'rxjs';
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
      { field: 'polygonStatus', header: 'Status' },
    ];
    this.headerName = this.fetchService.getHeaderName();
  }
  downloadFile(el): Observable<any>{		
    return this.http.get(('http://localhost:8080/downloadFile/' + el.id), { responseType: 'blob' });   
  }
  onClickRecord(event, el) {
    this.downloadFile(el).subscribe(response => {
      let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, 'Steeringwheel.json');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }
}
