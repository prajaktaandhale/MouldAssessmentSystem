import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolygonStatusService {
  healthy;
  disposable;
  needProbe;

  constructor() { }

  setValues(healthy, disposable, needProbe) {
    this.healthy = healthy;
    this.disposable = disposable;
    this.needProbe = needProbe;
  }

  getValues() {
    return {
      healthy: this.healthy,
      disposable: this.disposable,
      needProbe: this.needProbe
    }
  }
}
