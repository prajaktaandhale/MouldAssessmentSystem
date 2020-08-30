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
  values;
  healthy;
  needProbe;
  disposable;
  

  constructor(private polygonStatus: PolygonStatusService) { 
      var values = polygonStatus.getValues();
      this.healthy = values.healthy;
      this.needProbe = values.needProbe;
      this.disposable = values.disposable;
  }

  ngOnInit() {
  this.myChart = new Chart(myChart, {
  type:'bar',
 showInLegend: true,
    data: {
          labels: ['January', 'February', 'March'],
          datasets: [{
                     label: "Healthy",
             backgroundColor: "green",
             data: [13,22,32,24]
           }, {
             label: "Need Probe",
             backgroundColor: "yellow",
             data: [4,25,26,34]
           }, {
             label: "Disposable",
             backgroundColor: "red",
             data: [41,17,15,34]
           }
         ]
       },
       options: {
        scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero: true,
                      stepSize: 20
                  }
               }],
               xAxes: [{
                barPercentage: 0.5,
                 categoryPercentage: 0.5
             }],
            title: {
                 display: true,
                 text: 'Historical Data',
                 fontSize: 16
             },
             legend: {
                 position: 'bottom'
             }
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
