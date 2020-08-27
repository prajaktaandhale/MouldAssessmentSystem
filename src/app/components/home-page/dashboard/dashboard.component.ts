import { Component, OnInit } from '@angular/core';
import { PolygonStatusService } from 'src/app/services/polygon-status.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { SingleDataSet,  monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Chart } from '../../../../../node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //myChart;
  
  

  constructor(private polygonStatus: PolygonStatusService) { 

  }

  ngOnInit() {
  //   this.myChart = new Chart(myChart, {
  //     type: 'bar',
  //     data: {
  //         labels: ['Red', 'Blue', 'Yellow'],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.9)',
  //                 'rgba(54, 162, 235, 0.9)',
  //                 'rgba(255, 206, 86, 0.9)'
  //             ],
  //             borderColor: [
  //                 'rgba(255, 99, 132, 0.9)',
  //                 'rgba(54, 162, 235, 0.9)',
  //                 'rgba(255, 206, 86, 0.9)'
  //             ],
  //             borderWidth: 0.5
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     beginAtZero: true
  //                 }
  //             }],
  //             xAxes: [{
  //               barPercentage: 0.2
  //           }]
  //         }
  //     }
  // });
    
  

}
}
