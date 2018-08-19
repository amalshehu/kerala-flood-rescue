import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { isPlatformBrowser } from '@angular/common';
import { SnackBar, SnackBarNotification } from './services/snack-bar.service';
import { WindowRef } from './window-ref.service';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as instantsearch from 'instantsearch.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public search: any;
  private title: string = this.titleService.getTitle();
  private metaDescription: string = this.metaService.getTag('name=description')
    .content;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private snackBarService: SnackBar,
    private windowRef: WindowRef,
    private swUpdate: SwUpdate,
    private translate: TranslateService,
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {
    this.translate.setDefaultLang(this.translate.getBrowserLang());
  }

  public ngOnInit(): void {
    this.search = instantsearch({
      appId: 'Z3V5EBP19C',
      apiKey: 'afc7b221d7f873591854c6a383d4ca49',
      indexName: 'rescue_requests'
    });
    // search box widget
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        autofocus: false,
        placeholder: 'Search for actors',
        poweredBy: true
      })
    );

    // initialize hits widget
    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          empty: 'No results',
          item: `<img src=https://image.tmdb.org/t/p/w300{{image_path}} width="50px">
                <strong>Result {{objectID}}</strong>:
                {{{_highlightResult.name.value}}}`
        },
        escapeHits: true
      })
    );

    this.search.addWidget(
      instantsearch.widgets.stats({
        container: '#stats'
      })
    );

    this.search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination',
        maxPages: 20
      })
    );

    this.search.addWidget(
      instantsearch.widgets.analytics({
        pushFunction: (query, state, results) => {
          console.log(query);
          console.log(state);
          console.log(results);
        }
      })
    );
    this.search.start();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const snapshot: ActivatedRouteSnapshot = this.router.routerState
          .snapshot.root.firstChild;

        const title: string = snapshot.data['title'];
        this.titleService.setTitle(this.title + ' | ' + title);

        const description: string = snapshot.data['description'];
        this.metaService.updateTag(
          {
            name: 'description',
            content: this.metaDescription + ' ' + description
          },
          'name=description'
        );
      });

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.swUpdate.isEnabled) {
      // this.swUpdate.activated.filter(() => !localStorage.getItem('cached')).subscribe(() => {
      //     localStorage.setItem('cached', 'displayed');
      //     this.snackBarService.displayNotification({
      //         message: 'Content is cached', action: 'Ok'
      //     } as SnackBarNotification);
      // });

      this.swUpdate.available.subscribe(evt => {
        this.snackBarService.displayNotification({
          message: 'New version of app is available!',
          action: 'Launch',
          force: true,
          callback: () => {
            this.windowRef.nativeWindow.location.reload(true);
          }
        } as SnackBarNotification);
      });

      this.swUpdate
        .checkForUpdate()
        .then(() => {
          // noop
        })
        .catch(err => {
          console.error('error when checking for update', err);
        });
    }
  }
}
