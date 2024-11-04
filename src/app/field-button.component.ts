import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "modal-button",
  template: `
    <button
      [type]="to.type"
      [ngClass]="'btn btn-' + to.btnType"
      (click)="onClick($event)"
    >
      {{ to.text }}
    </button>
  `
})
export class FieldButtonComponent extends FieldType {
  onClick($event) {
    if (this.to.onClick) {
      this.to.onClick($event);
    }
  }
}
