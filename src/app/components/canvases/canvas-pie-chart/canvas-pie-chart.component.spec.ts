import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPieChartComponent } from './canvas-pie-chart.component';

describe('CanvasPieChartComponent', () => {
  let component: CanvasPieChartComponent;
  let fixture: ComponentFixture<CanvasPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
