import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoQueryComponent } from './geo-query.component';

describe('GeoQueryComponent', () => {
  let component: GeoQueryComponent;
  let fixture: ComponentFixture<GeoQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
