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
      route: 'dashboard',
      type: 'primary',
      icon: 'dashboard',
      active: true
    }, {
      name: 'Report',
      route: 'report',
      type: 'general',
      icon: 'bar_chart',
      active: false,
      level_1: [
        {
          name: 'Forecast',
          route: 'report',
          type: 'forcast',
          icon: null,
          active: false
        },
        {
          name: 'Assesment result',
          route: 'report',
          type: 'assesment',
          icon: null,
          active: false
        }
      ]
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
    this.router.events.subscribe((data: Data) => {
      if (data instanceof ActivationEnd) {
        console.log(data);
      }
    });
  }

  routeToPage(type) {
    this.types.forEach(type => type.active = false);
    this.types.find(t => t === type).active = true;
  }
}
