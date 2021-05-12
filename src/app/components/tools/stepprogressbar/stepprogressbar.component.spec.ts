import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepprogressbarComponent } from './stepprogressbar.component';

describe('StepprogressbarComponent', () => {
  let component: StepprogressbarComponent;
  let fixture: ComponentFixture<StepprogressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepprogressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepprogressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
