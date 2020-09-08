import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private fb: FormBuilder) { }
  name:String;
  ngOnInit() {
    // this.loginForm = new FormGroup({
      // firstName: new FormControl(''),
      // lastName: new FormControl(''),
      this.loginForm = this.fb.group({
        firstName: ['',Validators.minLength(4)],
        lastName: ['',Validators.maxLength(5)],
     
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
   
    });
  }
  onSubmit() {
   
    alert(this.loginForm.value);
  }
}
