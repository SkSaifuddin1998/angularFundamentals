import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validaton',
  templateUrl: './reactive-form-validaton.component.html',
  styleUrls: ['./reactive-form-validaton.component.css']
})
export class ReactiveFormValidatonComponent {

  title = 'reactiveformapp';

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

}
