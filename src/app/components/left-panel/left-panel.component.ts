import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  
  types: any[] = [
    {
      name: 'Dashboard',
      route: 'home',
      type: 'primary',
      icon: 'dashboard',
      active: true
    }, {
      name: 'Report',
      route: 'report',
      type: 'general',
      icon: 'bar_chart',
      active: false
    }, {
      name: 'Alerts',
      route: 'alerts',
      type: 'general',
      icon: 'notifications',
      active: false
    }, {
      name: 'FAQs',
      route: 'faq',
      type: 'general',
      icon: 'comment',
      active: false
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router);
    this.route.url.subscribe((data: Data) => {
      if (data instanceof ActivationEnd) {
        // url
        //this.showActive(data.url);
      }
    });
  }

  showActive(type) {
    this.types.forEach(type => type.active = false);
    this.types.find(t => t.name === type.name).active = true;
  }

  routeToPage(type) {
    this.showActive(type);
    this.router.navigate([type.route]);
  }
}
