import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkmodeswitchComponent } from './darkmodeswitch.component';

describe('DarkmodeswitchComponent', () => {
  let component: DarkmodeswitchComponent;
  let fixture: ComponentFixture<DarkmodeswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkmodeswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkmodeswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
