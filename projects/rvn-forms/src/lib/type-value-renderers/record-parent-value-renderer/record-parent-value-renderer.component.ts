import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { isNullOrUndefined, RvnDialogService } from '@abdulraheemabid/rvn-pkg-ng-core';
import { RecordViewComponent } from '../../components/record-view/record-view.component';
import { RecordParentValueRendererInput } from './record-parent-value-renderer.input';
import { FormService } from '../../services/form/form.service';
import { FormApiService } from '../../services/form-api/form-api.service';

@Component({
  selector: 'record-parent-value-renderer',
  templateUrl: './record-parent-value-renderer.component.html',
  styleUrls: ['./record-parent-value-renderer.component.scss']
})
export class RecordParentValueRendererComponent implements OnInit {

  @Input() config: RecordParentValueRendererInput;
  parentFieldName: string;
  containsParent: boolean = false;

  //TODO: Refactor: Remove dependency on formApiService. only screens are allowed to make API calls.
  constructor(private dialogService: RvnDialogService, private formService: FormService, private formApiService: FormApiService) { }

  ngOnInit(): void {

  }

  openSelectParentDialog() {

    this.containsParent = !isNullOrUndefined(this.config?.form?.attributes?.parentForm?.formId);

    if (this.containsParent) {
      forkJoin([
        this.formApiService.getForm(this.config?.form?.attributes?.parentForm?.formId),
        this.formApiService.getRecord(this.config?.form?.attributes?.parentForm?.formId, this.config?.record?.attributes?.parent?.recordId),
      ]).subscribe(
        results => {
          this.parentFieldName = this.formService.getSingularFormName(results[0]);
          let dialogRefOutput = this.dialogService.openComponentDialog({
            title: `${this.parentFieldName}`,
            component: RecordViewComponent,
            showActionBtns: true,
            showOnlyPrimaryButton: true,
            primaryButtonMessage: "Back",
            componentInputs: [
              { key: "config", value: { form: results[0], record: results[1] } },
            ]
          });
        }
      )
    }
  }

}