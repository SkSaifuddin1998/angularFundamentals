import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  submit(form:any){
    var firstName = form.firstName;
    console.log(firstName);

    var lastName = form.lastName;
    console.log(lastName);

    var comment = form.comment;
    console.log(comment);
  }

}
