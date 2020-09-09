import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { FetchDataService } from './fetch-data.service';
import { Store } from '@ngrx/store';
import * as actions from '../store/imas.actions';
import stubdata from '../../assets/data/response.js';
import stubdata2 from '../../assets/data/response2.js';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements Resolve<any> {

  private isDataFetched: boolean = false;
  private homedata: any;

  constructor(private fetchService: FetchDataService, private store: Store<{imas: any}>) {
    this.store.select('imas').subscribe((data) => {
      this.isDataFetched = !(!data);
      this.homedata = data;
    })
  }

  resolve(): any {
    if (this.isDataFetched) {
      return this.homedata.data;
    }
    setInterval(() => {
      this.fetchService.getMouldData().subscribe(data => {
        this.store.dispatch(new actions.SetData(data));
      });
    }, 20000)
    return this.fetchService.getMouldData();
  };

}