import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Chart } from '../../../../../node_modules/chart.js';
import _ from 'lodash';

@Component({
  selector: 'app-canvas-interpolation',
  templateUrl: './canvas-interpolation.component.html',
  styleUrls: ['./canvas-interpolation.component.scss']
})
export class CanvasInterpolationComponent implements OnInit {
  @ViewChild('interpolation', null) interpolation;
  @Input() data;

  constructor() { }

  ngOnInit() {
    this.handleInterpolation();
  }

  handleInterpolation() {
    const interpolation = this.interpolation.nativeElement;
    this.interpolation = new Chart(interpolation, {
      type: 'bar',
      data: {
        labels: ["June", "July", "August", "Sept"],
        datasets: [{
            label: "Decommissioned",
            type: "line",
            borderColor: "orange",
            data: [50,20,25,30],
            fill: false
          }, {
            label: "Healthy",
            type: "bar",
            backgroundColor: "#4272d7",
            backgroundColorHover: "#3e95cd",
            data: [130,120,110,140],
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
              stepSize: 50
            }
          }],
        },
        title: {
          display: false,
          text: 'Historical- Data'
        },
        legend: { display: true,
          position: 'bottom' }
      }
    });
  }

}
