import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasLineChartComponent } from './canvas-line-chart.component';

describe('CanvasLineChartComponent', () => {
  let component: CanvasLineChartComponent;
  let fixture: ComponentFixture<CanvasLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
