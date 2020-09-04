import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';
import _ from 'lodash';
import * as action from '../../../store/imas.actions';
import stubdata from '../../../../assets/data/response.js';
import { FetchDataService } from 'src/app/services/fetch-data.service.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data: any;
  public forecastedCategories: string[] = [];
  public date = new FormControl(new Date());
  public horizontalBarSelectedDate = new Date();
  
  public showHorizontalBar: boolean = true;
  public showLineChart: boolean = true;
  public showPieChart: boolean = true;
  public showInterpolation: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private store: Store<{ imas: any }>,
    private _snackBar: MatSnackBar,
    private fetchService: FetchDataService
  ) {}

  ngOnInit() {
    this.store.select('imas').subscribe((data) => {
      if (data) {
        this.data = data.data;
        this.showHorizontalBar = false;
        this.showLineChart = false;
        this.showPieChart = false;
        this.showInterpolation = false;
        setTimeout(() => {
          this.initialize();
        }, 50);
      }
    });
    this.route.data.subscribe((data: Data) => {
      this.store.dispatch(new action.SetData(stubdata));
      this.data = stubdata;
      this.initialize();
    });
    
  }

  initialize() {
    this.showHorizontalBar = true;
    this.showLineChart = true;
    this.showPieChart = true;
    this.showInterpolation = true;
    this.getLabels();
    this.showSnackbar();
  }
  showMouldToAssess() {
    this.router.navigate(['/home/records']);
  }
  showResults(header: string) {
    this.router.navigate(['/home/todayStatus']);
    this.fetchService.setHeaderName(header);
  }

  onDateChange(event) {
    this.horizontalBarSelectedDate = event.target.value;
  }

  getLabels() {
    const categories = this.data.forecastedPolygonlist.map(el => el.category);
    this.forecastedCategories = _.uniq(categories);
  }

  getHorizontalBarData() {
    const categories = this.forecastedCategories;
    const data = {};
    categories.forEach(el => {
      const count = this.data.forecastedPolygonlist.filter(fp => {
        return fp.category === el;
      }).length;
      data[el] = count;
    });
    return data;
  }

  showSnackbar() {
    const fcData = this.getHorizontalBarData();
    const data: any[] = [];
    const fcDataArr = Object.keys(fcData)
    fcDataArr.forEach((key, index) => {
      data.push(key);
      data.push(' : ')
      data.push(fcData[key]);
      if (index !== fcDataArr.length - 1) {
        data.push(', ')
      }
    })
    console.log(data.join(''));
    this._snackBar.open(`Items pending for mould - ${data.join('')}`, 'X', {
      panelClass: ['snackbar'],
      verticalPosition: 'top',
      
    });
  }
}
