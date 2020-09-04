import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasHorizontalBarComponent } from './canvas-horizontal-bar.component';

describe('CanvasHorizontalBarComponent', () => {
  let component: CanvasHorizontalBarComponent;
  let fixture: ComponentFixture<CanvasHorizontalBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasHorizontalBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
