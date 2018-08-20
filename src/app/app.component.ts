import { AppActions, LoadCamp } from './app.actions';
import { State } from './reducers/index';
import { SnackBarService, SnackBarNotification } from './snack-bar.service';
import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { WindowRefService } from './window-ref.service';
import { Store } from '@ngrx/store';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Observable } from 'rxjs';
import * as appActions from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kerala-rescue-dashboard';
  items: any;
  constructor(
    private swUpdate: SwUpdate,
    private windowRef: WindowRefService,
    private snackBarService: SnackBarService,
    private store: Store<State>
  ) {
    // this.dbRef = db.list('reliefcamps');
    // this.dbRef.valueChanges().subscribe(x => {
    //   this.items = x;
    // });
  }
  ngOnInit(): void {
    this.store.dispatch(new appActions.LoadCamp());
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.available.subscribe(evt => {
    //     this.snackBarService.displayNotification({
    //       message: 'New version of app is available!',
    //       action: 'Launch',
    //       force: true,
    //       callback: () => {
    //         this.windowRef.nativeWindow.location.reload(true);
    //       }
    //     } as SnackBarNotification);
    //   });
    //   this.swUpdate
    //     .checkForUpdate()
    //     .then(() => {
    //       // noop
    //     })
    //     .catch(err => {
    //       console.error('error when checking for update', err);
    //     });
    // }
  }
}
