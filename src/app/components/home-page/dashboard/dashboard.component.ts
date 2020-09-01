import { Component, OnInit, ViewChild } from '@angular/core';
import { PolygonStatusService } from 'src/app/services/polygon-status.service';
import { Chart } from '../../../../../node_modules/chart.js';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import _ from 'lodash';

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
  public data: any;
  date = new FormControl(new Date());
  values;
  healthy;
  needProbe;
  disposable;
  horizontalBarSelectedDate = new Date();


  constructor(private polygonStatus: PolygonStatusService, private router: Router) {
    var values = polygonStatus.getValues();
    this.healthy = values.healthy;
    this.needProbe = values.needProbe;
    this.disposable = values.disposable;
  }

  ngOnInit() {
    
    const lineChart = this.lineChart.nativeElement;
    const pieChart = this.pieChart.nativeElement;
    const interpolation = this.interpolation.nativeElement;
    this.data = this.getData();
    this.handleHorizontalBar();
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
    this.lineChart = new Chart(lineChart, {
      type: 'line',
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, {
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, {
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, {
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Mould Status Forecast'
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
          data: [408, 547, 675, 734],
          fill: false
        }, {
          label: "Africa",
          type: "line",
          borderColor: "#3e95cd",
          data: [133, 221, 783, 2478],
          fill: false
        }, {
          label: "Europe",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408, 547, 675, 734],
        }, {
          label: "Africa",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133, 221, 783, 2478]
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
  showMouldToAssess() {
    this.router.navigate(['/homePage/records']);
  }
  showResults() {
    this.router.navigate(['/homePage/todayStatus']);
  }

  onDateChange(event) {
    this.horizontalBarSelectedDate = event.target.value;
    this.updateHorizontalBar();
  }

  getData() {
    return {
      "forecastedPolygonlist": [
        {
          "id": 1,
          "sku": "Steering_101",
          "category": "Steering",
          "assemblyLineNumber": "101",
          "manufacturor": null,
          "cycles": "10000",
          "dicommisionDate": "2021-03-08T18:30:00.000+00:00",
          "polygonStatus": "disposable"
        },
        {
          "id": 2,
          "sku": "Steering_102",
          "category": "Steering",
          "assemblyLineNumber": "101",
          "manufacturor": null,
          "cycles": "10000",
          "dicommisionDate": "2021-04-08T18:30:00.000+00:00",
          "polygonStatus": "Need_Probe"
        },{
          "id": 1,
          "sku": "Steering_101",
          "category": "Tire",
          "assemblyLineNumber": "101",
          "manufacturor": null,
          "cycles": "10000",
          "dicommisionDate": "2021-03-08T18:30:00.000+00:00",
          "polygonStatus": "disposable"
        },
        {
          "id": 2,
          "sku": "Steering_102",
          "category": "Tire",
          "assemblyLineNumber": "101",
          "manufacturor": null,
          "cycles": "10000",
          "dicommisionDate": "2021-04-08T18:30:00.000+00:00",
          "polygonStatus": "Need_Probe"
        },
      ],
      "assessedPolygonlist": [
        {
          "id": 1,
          "sku": "Steeringwheel_101",
          "category": "Steeringwheel",
          "manufacturor": "ARBURGsd",
          "cycles": null,
          "fileData": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          "assessedDate": "2020-09-01T09:49:50.717+00:00",
          "polygonStatus": "Healthy",
          "batchNumber": "101"
        }
      ]
    };
  }

  handleHorizontalBar() {
    const horizontalBar = this.horizontalBar.nativeElement;
    this.horizontalBar = new Chart(horizontalBar, {
      type: 'horizontalBar',
      data: {
        labels: this.getLabels(),
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: this.getHorizontalBarData()
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Mould to be assessed'
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

  getLabels() {
    const categories = this.data.forecastedPolygonlist.map(el => el.category);
    return _.uniq(categories)
  }

  getHorizontalBarData() {
    const categories = this.getLabels();
    const data = [];
    
    categories.forEach(el => {
      const count = this.data.forecastedPolygonlist.filter(fp => {
        return fp.category === el;
      }).length;
      data.push(count);
    });
    return data; //[2, 2]
  }
}
