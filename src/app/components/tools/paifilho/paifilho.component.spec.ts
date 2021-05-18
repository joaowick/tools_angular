import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaifilhoComponent } from './paifilho.component';

describe('PaifilhoComponent', () => {
  let component: PaifilhoComponent;
  let fixture: ComponentFixture<PaifilhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaifilhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaifilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
