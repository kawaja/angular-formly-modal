import { Component, Input } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "modal-button",
  template: `
    <button
      [type]="props.type"
      [ngClass]="'btn btn-' + props['btnType']"
      (click)="onClick($event)"
    >
      {{ props['text'] }}
    </button>
  `
})
export class FieldButtonComponent extends FieldType {

  onClick($event) {
    if (this.props['onClick']) {
      this.props['onClick']($event);
    }
  }
}
