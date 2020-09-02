import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

  routeToPage(type) {
    this.types.forEach(type => type.active = false);
    this.types.find(t => t === type).active = true;
  }


}
