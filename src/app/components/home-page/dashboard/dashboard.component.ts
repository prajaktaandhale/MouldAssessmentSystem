import { Component, OnInit } from '@angular/core';
import { PolygonStatusService } from 'src/app/services/polygon-status.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  values;

  constructor(private polygonStatus: PolygonStatusService) { }

  ngOnInit() {
    this.values = this.polygonStatus.getValues;
  }

}
