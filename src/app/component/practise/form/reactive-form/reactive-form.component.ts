import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  studentForm: FormGroup = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl(""),
      userName: new FormControl("",[Validators.email, Validators.required]),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl(""),
      isAcceptTerms: new FormControl(""),
  });
  formValue: any;

  get firstNameControl(){
    return this.studentForm.controls['firstName'];
  }
  
  get userNameControl(){
    return this.studentForm.controls['userName'];
  }
  constructor(){}

  onSave(){
    this.formValue = this.studentForm.value;
  }

}
