import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GeoService {
  public hits = new BehaviorSubject([]);
  private dbRef: any;
  private geoFire: any;
  constructor(private db: AngularFireDatabase) {
    /// Reference database location for GeoFire
    this.dbRef = this.db.list('/locations');
    this.geoFire = new GeoFire(this.dbRef.$ref);
  }

  /// Adds GeoFire data to database
  public setLocation(key: string, coords: any) {
    this.geoFire
      .set(key, coords)
      .then(_ => console.log('location updated'))
      .catch(err => console.log(err));
  }

  /// Queries database for nearby locations
  /// Maps results to the hits BehaviorSubject
  public getLocations(radius: number, coords: any) {
    this.geoFire
      .query({
        center: coords,
        radius: radius
      })
      .on('key_entered', (key, location, distance) => {
        const hit = {
          location: location,
          distance: distance
        };

        const currentHits = this.hits.value;
        currentHits.push(hit);
        this.hits.next(currentHits);
      });
  }
}
