import { Component, OnInit, ViewChild } from '@angular/core';
import { PolygonStatusService } from 'src/app/services/polygon-status.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Chart } from '../../../../../node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('horizontalBar', null) horizontalBar;
  @ViewChild('lineChart', null) lineChart;
  @ViewChild('pieChart', null) pieChart;
  @ViewChild('interpolation', null) interpolation;
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
    const horizontalBar = this.horizontalBar.nativeElement;
    const lineChart = this.lineChart.nativeElement;
    const pieChart = this.pieChart.nativeElement;
    const interpolation = this.interpolation.nativeElement;
    this.horizontalBar = new Chart(horizontalBar, {
      type: 'bar',
      showInLegend: true,
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
          label: "Healthy",
          backgroundColor: "green",
          data: [13, 22, 32, 24]
        }, {
          label: "Need Probe",
          backgroundColor: "yellow",
          data: [4, 25, 26, 34]
        }, {
          label: "Disposable",
          backgroundColor: "red",
          data: [41, 17, 15, 34]
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
    this.lineChart = new Chart(lineChart, {
      type: 'pie',
      data: {
        labels: ["Healthy", "Need Probe", "Disposable"],
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
    this.pieChart = new Chart(pieChart, {
      type: 'bar',
      showInLegend: true,
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
          label: "Healthy",
          backgroundColor: "green",
          data: [13, 22, 32, 24]
        }, {
          label: "Need Probe",
          backgroundColor: "yellow",
          data: [4, 25, 26, 34]
        }, {
          label: "Disposable",
          backgroundColor: "red",
          data: [41, 17, 15, 34]
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
    this.interpolation = new Chart(interpolation, {
      type: 'bar',
      data: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [{
            label: "Europe",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408,547,675,734],
            fill: false
          }, {
            label: "Africa",
            type: "line",
            borderColor: "#3e95cd",
            data: [133,221,783,2478],
            fill: false
          }, {
            label: "Europe",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            data: [408,547,675,734],
          }, {
            label: "Africa",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            backgroundColorHover: "#3e95cd",
            data: [133,221,783,2478]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Population growth (millions): Europe & Africa'
        },
        legend: { display: false }
      }
  });

  }
}
