import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "modal-input",
  template: `
    <div class="form-group">
      <label [attr.for]="id" class="col-sm-2 col-form-label" *ngIf="to.label">
        {{ to.label }}
        <ng-container *ngIf="to.required && to.hideRequiredMarker !== true"
          >*</ng-container>
      </label>
      <input
        class="col-sm-7"
        [type]="type"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [class.is-invalid]="showError"
        class="form-control"
      />
      <div
        *ngIf="to.modable"
        class="input-group-addon btn btn btn-primary submit-button"
        (click)="onClick($event)">
        Open
      </div>
      <div *ngIf="showError" class="col-sm-3 invalid-feedback d-block">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
    </div>
  `,
  styles: [
    `
      .form-group {
        display: flex;
      }
      .input-group-addon {
        flex-grow: 1;
        margin-left: 10px;
        padding: 0 1em;
        line-height: 28px;
      }
    `
  ]
})
export class ModalFieldInputComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      modable: false
    }
  };

  get type() {
    return this.to.type || "text";
  }

  onClick($event) {
    if (this.to.onClick) {
      this.to.onClick($event);
    }
  }
}
