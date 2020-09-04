import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasInterpolationComponent } from './canvas-interpolation.component';

describe('CanvasInterpolationComponent', () => {
  let component: CanvasInterpolationComponent;
  let fixture: ComponentFixture<CanvasInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
