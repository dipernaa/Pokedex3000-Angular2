import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavigationEnd, Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LayoutService {

  private showBackButtonSource = new Subject<boolean>();
  private titleSource = new Subject<string>();

  showBackButton$ = this.showBackButtonSource.asObservable();
  title$ = this.titleSource.asObservable();

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let currentTitle, showBackButton;
        if (router.routerState.root.firstChild) {
          showBackButton = router.routerState.root.firstChild.data['value'].showBackButton;
          currentTitle = router.routerState.root.firstChild.data['value'].title;
        }

        this.broadcastShowBackButton(showBackButton);
        this.broadcastTitle(currentTitle);
      }
    })
  }

  broadcastShowBackButton(showBackButton: boolean): void {
    this.showBackButtonSource.next(showBackButton);
  }

  broadcastTitle(title: string): void {
    this.titleSource.next(title);
  }
}
