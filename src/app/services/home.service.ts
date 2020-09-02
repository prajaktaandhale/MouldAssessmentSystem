import { Injectable } from '@angular/core';
import { Resolve, Data, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((data: Data) => data));
  };

}
