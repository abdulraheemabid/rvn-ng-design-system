import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RvnComponentDialogComponent, RvnComponentDialogInput } from '../../components/rvn-component-dialog/rvn-component-dialog.component';
import { RvnConfirmDialogComponent, RvnConfirmDialogInput } from '../../components/rvn-confirm-dialog/rvn-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
/**
 * Handles Dialog functions. It uses dialog component defined in rvn-core/components
 */
export class RvnDialogService {

  constructor(public dialog: MatDialog) { }

  /**
   * Opens a predefined confirm dialog. RvnConfirmDialogInput can be passed in to customise its behaviour.
   * It return the afterClosed() observable which can be subscribed to in order to perfrom some action based on user selection
   * 
   * ### Example
   ```ts
   this.dialogService.openConfirmDialog({
      title: 'Confirm Delete',
      messages: [`Form "${form.name}" will be deleted permanently and its child forms will become root forms.`, `Are you sure?`],
      noButtonMessage: "Cancel",
      yesButtonMessage: "Delete",
      yesButtonConfig: { type: 'tertiary', color: 'warn' }
    }).pipe(
      switchMap((confirmed: boolean) => {
        return confirmed ? this.formApiService.deleteForm(form.id) : of(null);
      }))
      .subscribe(val => {
        if (val) this.ngOnInit();
      })
   ```
   */
  openConfirmDialog(config: RvnConfirmDialogInput = {}): Observable<boolean> {
    const dialogRef = this.dialog.open(RvnConfirmDialogComponent, { data: config });
    return dialogRef.afterClosed();
  }

  /**
   * Opens RvnComponentDialogComponent defined in rvn-core/components.
   * Use this if you want to render a custom component in a dialog screen by passing in configured RvnComponentDialogInput.
   * It returns a dialog reference and the componentRef which was passed in.
   * 
   * ### Example
   ```ts
    let dialog = this.dialogService.openComponentDialog({
      component: CustomComponent,
      title: `My Title`,
      componentInputs: [
        {
          key: 'config', value: {
            componentsProperty: "someValue",
          }
        },
      ]
    });

    dialog.dialogRef.afterClosed.subscribe(val => this.doSomething());
   ```
   */
  openComponentDialog(config: RvnComponentDialogInput) {
    const dialogRef = this.dialog.open(RvnComponentDialogComponent, { data: config });
    return { dialogRef, componentRef: dialogRef.componentInstance.componentRef };
  }

  /**
   * Closes all open dialogs
   */
  closeAllDialogs() {
    this.dialog.closeAll();
  }
}
