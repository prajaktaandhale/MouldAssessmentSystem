import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';

import { FetchDataService } from './fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements Resolve<any> {

  constructor(private fetchService: FetchDataService) { }

  resolve(): any {
    return this.fetchService.getMouldData();
  };

}
