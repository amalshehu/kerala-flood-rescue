import { SnackBarService, SnackBarNotification } from './snack-bar.service';
import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { WindowRefService } from './window-ref.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kerala-rescue-dashboard';
  dbRef: AngularFireList<any>;
  items: any;
  constructor(
    private swUpdate: SwUpdate,
    private windowRef: WindowRefService,
    private snackBarService: SnackBarService,
    private db: AngularFireDatabase
  ) {
    this.dbRef = db.list('reliefcamps');
    this.dbRef.valueChanges().subscribe(x => {
      this.items = x;
    });
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
