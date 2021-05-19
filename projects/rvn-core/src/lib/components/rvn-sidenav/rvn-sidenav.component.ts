import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RvnSidenavInput } from './rvn-sidenav.input';

@Component({
  selector: 'rvn-sidenav',
  templateUrl: './rvn-sidenav.component.html',
  styleUrls: ['./rvn-sidenav.component.scss']
})
export class RvnSidenavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver,) { }

  @Input() config: RvnSidenavInput = {} as any;
  @ViewChild("drawer", { static: true }) drawer;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
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
