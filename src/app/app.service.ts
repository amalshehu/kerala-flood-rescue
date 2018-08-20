import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  dbRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.dbRef = this.db.list('reliefcamps');
  }
  getCamps() {
    return this.dbRef.valueChanges();
  }
}
