import * as fromApp from './reducers/index';
import { SnackBarService, SnackBarNotification } from './snack-bar.service';
import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { WindowRefService } from './window-ref.service';
import { Store, select } from '@ngrx/store';
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
  campsCount$: any;
  constructor(
    private swUpdate: SwUpdate,
    private windowRef: WindowRefService,
    private snackBarService: SnackBarService,
    private store: Store<fromApp.State>
  ) {
    this.store.dispatch(new appActions.LoadCamp());
  }
  ngOnInit(): void {
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
