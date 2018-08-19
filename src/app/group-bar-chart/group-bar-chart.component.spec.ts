import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBarChartComponent } from './group-bar-chart.component';

describe('GroupBarChartComponent', () => {
  let component: GroupBarChartComponent;
  let fixture: ComponentFixture<GroupBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
