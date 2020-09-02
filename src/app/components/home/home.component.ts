import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fetchData: FetchDataService) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.fetchData.setData(data.data);
    });
  }

}
