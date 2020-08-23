import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  options : [{}];

  constructor() { }

  ngOnInit() {
    this.options = [
      {
        name : 'Notifications',
        class : 'fa fa-bell fa-1x icon-color'

    }]
  }

}
