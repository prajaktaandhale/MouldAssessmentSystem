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
  myChart;
  myPieChart;
  

  constructor(private polygonStatus: PolygonStatusService) { 

  }

  ngOnInit() {
    this.myChart = new Chart(myChart, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March'],
          datasets: [{
            label: "Healthy",
            backgroundColor: "green",
            data: [133,221,783,2478]
          }, {
            label: "Need Probe",
            backgroundColor: "yellow",
            data: [408,547,675,734]
          }, {
            label: "Disposable",
            backgroundColor: "red",
            data: [408,547,675,734]
          }
        ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }],
              xAxes: [{
                barPercentage: 0.5,
                categoryPercentage: 0.5
            }]
          }
      }
  });
  var myPieChart = new Chart(myChart2, {
    type: 'pie',
    data: {
      labels: ["Healthy", "Need Probe",  "Disposable"],
      datasets: [{
        backgroundColor: [
          "#28a745",
          "#007bff",
          "#dc3545"
        ],
        data: [12, 19, 3]
      }]
    }
  });
    
  

}
}
