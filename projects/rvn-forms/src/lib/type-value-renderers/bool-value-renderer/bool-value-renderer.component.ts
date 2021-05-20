import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RvnCheckboxInput } from '@abdulraheemabid/rvn-pkg-ng-core';
import { BaseValueRendererComponent } from '../base-value-renderer/base-value-renderer.component';

@Component({
  selector: 'bool-value-renderer',
  templateUrl: './bool-value-renderer.component.html',
  styleUrls: ['./bool-value-renderer.component.scss']
})
export class BoolValueRendererComponent extends BaseValueRendererComponent implements OnInit {

  fc: FormControl;
  checkboxConfig: RvnCheckboxInput = { label: null, checkboxOptions: null, mode: 'boolean-display' };

  ngOnInit(): void {
    this.fc = this.value ? new FormControl(this.value) : new FormControl();
  }
}
