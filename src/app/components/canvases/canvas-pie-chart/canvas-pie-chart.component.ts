import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Chart } from '../../../../../node_modules/chart.js';
import _ from 'lodash';

@Component({
  selector: 'app-canvas-pie-chart',
  templateUrl: './canvas-pie-chart.component.html',
  styleUrls: ['./canvas-pie-chart.component.scss']
})
export class CanvasPieChartComponent implements OnInit {
  @ViewChild('pieChart', null) pieChart;
  @Input() data;

  constructor() { }

  ngOnInit() {
    this.handlePieChart();
  }

  handlePieChart() {
    const pieChart = this.pieChart.nativeElement;
    this.pieChart = new Chart(pieChart, {
      type: 'pie',
      showInLegend: true,
      data: {
        labels: ["Need Probe", "Healthy", "Disposable"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["orange", "#4272d7","grey"],
          data: [28,59,13]
        }]
      },
      options: {
        title: {
          display: false,
          text: 'Today\'s Assessment'
        },
        legend: { display: true,
          position: 'bottom' }
        
      }
    });
  }

}
