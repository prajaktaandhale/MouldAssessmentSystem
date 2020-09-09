import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Chart } from '../../../../../node_modules/chart.js';
import _ from 'lodash';
//import { min, max } from 'rxjs/operators';

@Component({
  selector: 'app-canvas-horizontal-bar',
  templateUrl: './canvas-horizontal-bar.component.html',
  styleUrls: ['./canvas-horizontal-bar.component.scss']
})
export class CanvasHorizontalBarComponent implements OnInit {

  horizontalBarSelectedDate = new Date();
  @ViewChild('horizontalBar', null) horizontalBar;
  public forecastedCategories: string[] = [];
  @Input() data;
 // min; max;
  constructor() { }

  ngOnInit() {
    this.getLabels();
    this.handleHorizontalBar();
  }

  getLabels() {
    const categories = this.data.forecastedPolygonlist.map(el => el.category);
    this.forecastedCategories = _.uniq(categories);
  }

  onDateChange(event) {
    this.horizontalBarSelectedDate = event.target.value;
    this.updateHorizontalBar();
  }

  handleHorizontalBar() {
    const horizontalBar = this.horizontalBar.nativeElement;
    this.horizontalBar = new Chart(horizontalBar, {
      type: 'horizontalBar',
      data: {
        labels: this.forecastedCategories,
        datasets: [
          {
            label: "Number",
            backgroundColor: ["orange", "green", "red"],
            data: Object.values(this.getHorizontalBarData())
          }
        ]
      },
      options: {
        legend: { display: true, position: 'bottom' },
        title: {
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        }
      }
    });
  }

  updateHorizontalBar() {
    // dataset => data changed
    //console.log(this.horizontalBarSelectedDate);
    this.horizontalBar.data.datasets[0].data = [3, 5]//logic as per date;
    
    // important
    this.horizontalBar.update();
  }

  // handleXAxis(data) {
  //   this.min = Math.min.apply(null, data);
  //   this.max = Math.max.apply(null, data);
  //   if (this.horizontalBar.options){
  //     this.horizontalBar.options.scales.xAxes = [{
  //       ticks: {
  //         min: this.min,
  //         max: this.max,
  //         stepSize: 1
  //       }
  //     }]

  //   }
  // }

  getHorizontalBarData() {
    const categories = this.forecastedCategories;
    const data = {};
    categories.forEach(el => {
      const count = this.data.forecastedPolygonlist.filter(fp => {
        return fp.category === el;
      }).length;
      data[el] = count;
    });
    //this.handleXAxis(data);
    return data;
  }

}
