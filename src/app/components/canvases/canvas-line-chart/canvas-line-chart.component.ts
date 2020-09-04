import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Chart } from '../../../../../node_modules/chart.js';
import _ from 'lodash';

@Component({
  selector: 'app-canvas-line-chart',
  templateUrl: './canvas-line-chart.component.html',
  styleUrls: ['./canvas-line-chart.component.scss']
})
export class CanvasLineChartComponent implements OnInit {
  @ViewChild('lineChart', null) lineChart;
  @Input() data;

  constructor() { }

  ngOnInit() {
    this.handleLineGraph();
  }

  handleLineGraph() {
    const lineChart = this.lineChart.nativeElement;
    this.lineChart = new Chart(lineChart, {
      type: 'line',
      data: {
        labels: ["28/08","29/08","30/08","31/08","1/09"],
        datasets: [{ 
            data: [200,190,180,170,160],
            label: "Healthy",
            borderColor: "#4272d7",
            fill: false
          }, { 
            data: [250,300,249,350,182],
            label: "Needs Probe",
            borderColor: "orange",
            fill: false
          }, { 
            data: [300,310,259,230,190],
            label: "Disposable",
            borderColor: "grey",
            fill: false
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
              stepSize: 100
            }
          }],
        },
        title: {
          display: true,
          text: ''
        },
        legend: { display: true,
        position: 'bottom' }
      }
    });
  }

}
