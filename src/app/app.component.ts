import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "formly-app-example",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
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
      props: {
        modable: true,
        disabled: true,
        label: "E-mail",
        placeholder: "email@email.it",
        opener: () => {
          this.emailModal = true;
        },
      },
    },

    /*********** MODAL FIELDS ***********/
    {
      key: "modalField",
      wrappers: ["modal"],
      expressions: {
        hide: () => !this.emailModal,
      },
      props: {
        title: "A modal",
        description: "Description of this modal",
        closer: () => {
          this.emailModal = false;
        },
      },
      fieldGroup: [
        {
          key: "email",
          type: "input",
          props: {
            type: "email",
            label: "E-mail",
            placeholder: "Insert a valid e-mail",
            minLength: 3,
          },
        },
        {
          key: "myButton",
          type: "button",
          props: {
            type: "button",
            btnType: "primary",
            text: "Send",
            onClick: ($event) => {
              if (this.form.valid && this.model.modalField.email) {
                this.model = {
                  ...this.model,
                  modalOpener: this.model.modalField.email,
                };
                // this.form
                // .get("modalOpener")
                //     .setValue(this.model.modalField.email);
                this.emailModal = false;
                console.log("this.model: ", this.model);
              }
            },
          },
        },
      ],
    },

    {
      key: "normal-input",
      type: "modal-input",
      props: {
        modable: false,
        label: "Generic text",
        placeholder: "generic value",
      },
    },
  ];

  ngOnInit() {
    console.log("[AppComponent] OnInit", JSON.stringify(this.fields));
  }

  submit() {
    console.log(this.fields);
    alert(JSON.stringify(this.model));
  }
}
