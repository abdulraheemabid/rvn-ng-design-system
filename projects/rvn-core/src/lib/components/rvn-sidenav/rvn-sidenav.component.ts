import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface RvnSidenavInput {
  toggleSidenav$?: Observable<null>;
}

/**
 * Config defaults:
 * 1. none
 * 
 * Supported ng-content selectors
 * 1. sidenav
 * 2. sidenavContent
 * 
 * @example
 * <rvn-sidenav [config]='{toggleSidenav$: toggleSidenav$}'>
 *                <div sidenav><rvn-nav-list [config]="{list: sideBarLinks}"></rvn-nav-list></div>
 *                <div sidenavContent><router-outlet></router-outlet></div>
 * </rvn-sidenav>
 * 
 */
@Component({
  selector: 'rvn-sidenav',
  templateUrl: './rvn-sidenav.component.html',
  styleUrls: ['./rvn-sidenav.component.scss']
})
export class RvnSidenavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver,) { }

  @Input() config: RvnSidenavInput = {} as any;
  @ViewChild("drawer", { static: true }) drawer;
  isSmallDesktop$: Observable<boolean> = this.breakpointObserver.observe("(max-width: 1367px)")
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    if (this.config.toggleSidenav$)
      this.config.toggleSidenav$.subscribe(_ => {
        this.drawer.toggle();
      });
  }

}
