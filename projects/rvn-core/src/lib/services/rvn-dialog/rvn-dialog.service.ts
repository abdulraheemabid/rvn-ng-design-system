import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RvnComponentDialogComponent, RvnComponentDialogInput } from '../../components/rvn-component-dialog/rvn-component-dialog.component';
import { RvnConfirmDialogComponent, RvnConfirmDialogInput } from '../../components/rvn-confirm-dialog/rvn-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class RvnDialogService {

  constructor(public dialog: MatDialog) { }

  openConfirmDialog(config: RvnConfirmDialogInput = {}): Observable<boolean> {
    const dialogRef = this.dialog.open(RvnConfirmDialogComponent, { data: config });
    return dialogRef.afterClosed();
  }

  openComponentDialog(config: RvnComponentDialogInput) {
    const dialogRef = this.dialog.open(RvnComponentDialogComponent, { data: config });
    return { dialogRef, componentRef: dialogRef.componentInstance.componentRef };
  }

  closeAllDialogs() {
    this.dialog.closeAll();
  }
}
