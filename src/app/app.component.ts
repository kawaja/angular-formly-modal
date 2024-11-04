import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "formly-app-example",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  emailModal = false; // Flag to open/close our modal

  fields: FormlyFieldConfig[] = [
    // This field uses a custom template to add a little
    // button to click and open the modal with the onClick event.
    {
      key: "modalOpener",
      type: "modal-input",
      templateOptions: {
        modable: true,
        disabled: true,
        label: "E-mail",
        placeholder: "email@email.it",
        onClick: $event => {
          this.emailModal = true;
        }
      }
    },

    /*********** MODAL FIELDS ***********/
    {
      key: "modalField",
      wrappers: ["modal"],
      hideExpression: () => !this.emailModal,
      templateOptions: {
        title: "A modal",
        description: "Description of this modal",
        onClose: () => {
          this.emailModal = false;
        }
      },
      fieldGroup: [
        {
          key: "email",
          type: "input",
          templateOptions: {
            type: "email",
            label: "E-mail",
            placeholder: "Insert a valid e-mail",
            minLength: 3
          }
        },
        {
          key: "myButton",
          type: "button",
          templateOptions: {
            type: "button",
            btnType: "primary",
            text: "Send",
            onClick: $event => {
              if (this.form.valid && this.model.modalField.email) {
                this.model = {
                  ...this.model,
                  modalOpener: this.model.modalField.email
                };
                this.form
                  .get("modalOpener")
                  .setValue(this.model.modalField.email);
                this.emailModal = false;
                console.log("this.model: ", this.model);
              }
            }
          }
        }
      ]
    },

    {
      key: "normal-input",
      type: "modal-input",
      templateOptions: {
        modable: false,
        label: "Generic text",
        placeholder: "generic value"
      }
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
