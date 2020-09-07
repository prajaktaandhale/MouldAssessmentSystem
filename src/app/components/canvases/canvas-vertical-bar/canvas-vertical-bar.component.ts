import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from '../../../../../node_modules/chart.js';

@Component({
  selector: 'app-canvas-vertical-bar',
  templateUrl: './canvas-vertical-bar.component.html',
  styleUrls: ['./canvas-vertical-bar.component.scss']
})
export class CanvasVerticalBarComponent implements OnInit {
  @ViewChild('verticalBar', null) verticalBar;

  constructor() { }

  ngOnInit() {
    const verticalBar = this.verticalBar.nativeElement;
    this.verticalBar = new Chart(verticalBar, {
      type: 'bar',
      data: {
        labels: ["Foboha GmbH", "Arburg GmbH", "Braunform GmbH", "Fostag Formenbau AG"],
        datasets: [{
            label: "Baseline",
            type: "line",
            borderColor: "orange",
            data: [4,4,4,4],
            fill: false
          }, {
            label: "Avg Lifecycle in years",
            type: "bar",
            backgroundColor: "#4272d7",
            backgroundColorHover: "#3e95cd",
            data: [2,8,5,9],
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 2
            }
          }],
        },
        title: {
          display: false
        },
        legend: { display: true,
          position: 'bottom' }
      }
    });
  }

}
