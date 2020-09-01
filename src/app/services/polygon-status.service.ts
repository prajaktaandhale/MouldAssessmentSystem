import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolygonStatusService {
  data;

  constructor() { }

  setData(response) {
    this.data = response;
  }
  getData() {
    return this.data;
  }

  // setValues(healthy, disposable, needProbe) {
  //   this.healthy = healthy;
  //   this.disposable = disposable;
  //   this.needProbe = needProbe;
  // }

  // getValues() {
  //   return {
  //     healthy: this.healthy,
  //     disposable: this.disposable,
  //     needProbe: this.needProbe
  //   }
  // }
}
