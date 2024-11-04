import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";

import { AppComponent } from "./app.component";
import { ModalWrapperComponent } from "./modal-wrapper.component";
import { FieldButtonComponent } from "./field-button.component";
import { ModalFieldInputComponent } from "./modal-input.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: "button", component: FieldButtonComponent },
        { name: "modal-input", component: ModalFieldInputComponent },
      ],
      wrappers: [{ name: "modal", component: ModalWrapperComponent }]
    })
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FieldButtonComponent,
    ModalWrapperComponent,
    ModalFieldInputComponent
  ]
})
export class AppModule {}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
