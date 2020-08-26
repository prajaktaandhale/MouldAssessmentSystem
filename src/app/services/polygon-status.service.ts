import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolygonStatusService {
  healthy;
  disposable;

  constructor() { }

  setValues(healthy, disposable) {
    this.healthy = healthy;
    this.disposable = disposable;
  }

  getValues() {
    return {
      healthy: this.healthy,
      disposable: this.disposable,
    }
  }
}
