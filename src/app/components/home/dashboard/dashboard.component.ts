import { Component, OnInit, ViewChild } from '@angular/core';
import { PolygonStatusService } from 'src/app/services/polygon-status.service';
import { Chart } from '../../../../../node_modules/chart.js';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import _ from 'lodash';
import { FetchDataService } from 'src/app/services/fetch-data.service.js';

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
  horizontalBarSelectedDate = new Date();

  constructor(private polygonStatus: PolygonStatusService, private router: Router, private http:HttpClient, private fetchData: FetchDataService) {
    
  }

  ngOnInit() {
    this.fetchData.getMouldData().
    subscribe( (response) => {
      this.data = response;
      this.fetchData.setData(this.data);
      this.initialise();
    });
  }
  initialise() {
    const lineChart = this.lineChart.nativeElement;
    const pieChart = this.pieChart.nativeElement;
    const interpolation = this.interpolation.nativeElement;
    //this.data = this.getData();
    this.handleHorizontalBar();
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
          display: true,
          text: 'Today\'s Assessment'
        },
        legend: { display: true,
          position: 'bottom' }
        
      }
    });
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
          text: 'Mould Status-Forecast'
        },
        legend: { display: true,
        position: 'bottom' }
      }
    });
    this.interpolation = new Chart(interpolation, {
      type: 'bar',
      data: {
        labels: ["June", "July", "August", "Sept"],
        datasets: [{
            label: "Disposable",
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
          display: true,
          text: 'Historical- Data'
        },
        legend: { display: true,
          position: 'bottom' }
      } 
     });
    
  }
  showMouldToAssess() {
    this.router.navigate(['/home/records']);
  }
  showResults() {
    this.router.navigate(['/home/todayStatus']);
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
            backgroundColor: ["orange", "orange"],
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
