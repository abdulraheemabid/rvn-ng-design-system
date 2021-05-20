import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { ColorType } from '../../utils/types';

export interface RvnButtonInput {
  disabled?: boolean;
  color?: ColorType;
  type?: "primary" | "secondary" | "tertiary" | "icon" | "icon-text" | "icon-text-primary" | "icon-text-secondary" | "fab" | "mini-fab",
  icon?: string;
  btnClass?: string;
  tooltipMessage?: string;
}

@Component({
  selector: 'rvn-button',
  templateUrl: './rvn-button.component.html',
  styleUrls: ['./rvn-button.component.scss']
})
export class RvnButtonComponent implements OnInit {

  @Input() config: RvnButtonInput;
  @Input() disabled: boolean;
  @Output() onClick = new EventEmitter();

  ngOnInit(): void {
    if (isNullOrUndefined(this.config)) this.config = {};
    if (isNullOrUndefined(this.config?.type)) this.config.type = "primary";
    if (isNullOrUndefined(this.config?.btnClass)) this.config.btnClass = "";
    if (isNullOrUndefined(this.disabled)) this.disabled = false;
  }

  click(event: Event) {
    this.onClick.emit(event);
  }

}
