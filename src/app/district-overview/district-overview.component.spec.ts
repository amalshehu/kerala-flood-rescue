import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictOverviewComponent } from './district-overview.component';

describe('DistrictOverviewComponent', () => {
  let component: DistrictOverviewComponent;
  let fixture: ComponentFixture<DistrictOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
