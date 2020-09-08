import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: "ns-textField",
  templateUrl: './textField.component.html',
  styleUrls: ['./textField.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input() formgroup: FormGroup;
  @Input() formControlName;
  @Input() rtext;


  @Input() class;
  @Input() type;
  @Input() hint;

  pageSide;

  constructor() {}

  ngOnInit() {}

  get invalidControl() {
    if (
      this.formgroup.dirty &&
      this.formgroup.controls[this.formControlName].touched &&
      this.formgroup.controls[this.formControlName].invalid
    ) {
      return true;
    } else {
      return false;
    }
  }

  get errorRequired() {
    if (
      this.formgroup.dirty &&
      this.formgroup.controls[this.formControlName].touched &&
      this.formgroup.controls[this.formControlName].errors &&
      this.formgroup.controls[this.formControlName].errors.required
    ) {
      return true;
    } else {
      return false;
    }
  }

  get errorFormate() {
    if (
      this.formgroup.dirty &&
      this.formgroup.controls[this.formControlName].touched &&
      this.formgroup.controls[this.formControlName].errors &&
      this.formgroup.controls[this.formControlName].errors.email
    ) {
      return true;
    } else {
      return false;
    }
  }
  get errorminLength() {
    if (
      this.formgroup.dirty &&
      this.formgroup.controls[this.formControlName].touched &&
      this.formgroup.controls[this.formControlName].errors &&
      this.formgroup.controls[this.formControlName].errors.minlength
    ) {
      return true;
    } else {
      return false;
    }
  }
  get errormaxLength() {
    if (
      this.formgroup.dirty &&
      this.formgroup.controls[this.formControlName].touched &&
      this.formgroup.controls[this.formControlName].errors &&
      this.formgroup.controls[this.formControlName].errors.maxlength
    ) {
      return true;
    } else {
      return false;
    }
  }
}
