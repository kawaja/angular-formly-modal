import { Component, Input } from "@angular/core";
import { FieldWrapper } from "@ngx-formly/core";

@Component({
  selector: "modal-wrapper",
  template: `
    <div class="formly-modal">
      <div
        class="modal show d-block"
        tabindex="-1"
        role="dialog"
        aria-labelledby="dialog-events-name"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">
                {{ props['title'] }}
              </h4>
              <button
                type="button"
                class="close"
                (click)="onClose($event)"
                aria-label="Close"
              >
                <span class="close-icon">×</span>
              </button>
            </div>
            <div class="modal-body">
              <div [innerHTML]="props.description"></div>
              <ng-container #fieldComponent></ng-container>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade in" (click)="onClose($event)"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-backdrop.fade {
        opacity: 0.2;
        z-index: 1040;
      }
      .modal-dialog {
        z-index: 1050;
      }
    `
  ]
})
export class ModalWrapperComponent extends FieldWrapper {
  onClose($event) {
    if (this.props['onClose']) {
      this.props['onClose']($event);
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
