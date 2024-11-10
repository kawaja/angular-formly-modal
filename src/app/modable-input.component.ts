import { Component, Input, OnInit } from "@angular/core";
import { FieldType, FieldTypeConfig, FormlyFieldProps } from "@ngx-formly/core";

@Component({
  selector: "modable-input",
  template: `
    <div class="form-group" (click)="onClick($event)">
      <label [attr.for]="id" class="col-sm-2 col-form-label" *ngIf="props.label">
        {{ props.label }}
        <ng-container *ngIf="to.required && props['hideRequiredMarker'] !== true"
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
        *ngIf="props['modable']"
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
export class ModableFieldInputComponent extends FieldType<FieldTypeConfig> implements OnInit {
  // override defaultOptions?: Partial<FieldTypeConfig<FormlyFieldProps & { [additionalProperties: string]: any; }>>;

  get type() {
    return this.props.type || "text";
  }

  ngOnInit() {
    console.log('[ModalFieldInputComponent] onInit', this.props);
  }

  onClick($event) {
    console.log('[ModalFieldInputComponent] click ', this.props);
    if (this.props['opener']) {
      console.log('[ModalFieldInputComponent] opening ', this.props['opener']);
      this.props['opener']($event);
    }
  }
}
