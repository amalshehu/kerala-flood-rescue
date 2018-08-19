import { GeoService } from './../geo.service';
import { Component, OnInit } from '@angular/core';
import * as firebaseApp from 'firebase/app';
import * as geofirex from 'geofirex';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-geo-query',
  templateUrl: './geo-query.component.html',
  styleUrls: ['./geo-query.component.css']
})
export class GeoQueryComponent implements OnInit {
  public lat: number = 51.678418;
  public lng: number = 7.809007;
  constructor() {}

  ngOnInit() {
    this.getUserLocation();
  }
  public getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
  public seedDatabase() {
    const dummyPoints = [
      [37.9, -122.1],
      [38.7, -122.2],
      [38.1, -122.3],
      [38.3, -122.0],
      [38.7, -122.1]
    ];

    dummyPoints.forEach((val, idx) => {
      const name = `dummy-location-${idx}`;
      console.log(idx);
      // this.geo.setLocation(name, val);
    });
  }
}
