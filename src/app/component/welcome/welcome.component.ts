import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  username:string="";
  password:string="";
  confirmPassword:string="";
  gender:string="";
  country:string="";
  licenseAgreement:boolean=false;

  msg:string="";

  RegisterClick(){
    this.msg = "Username : "+this.username+"<br/>Password:"+this.password
    +"<br/>ConfirmPassword:"+this.confirmPassword
    +"<br/>Gender : "+this.gender+"<br/>Country : "+this.country
    +"<br/>License Agreement : "+this.licenseAgreement;
  }

  marks:number=80;
  mycolor:string="";
  myclass:string="";
  b:boolean=false;

  constructor(){
      if(this.marks >=35 ){
        this.mycolor="green";
        this.myclass="class1";
        this.b=true;
      }else{
        this.mycolor="red";
        this.myclass="class2";
        this.b=false;
      }
  }

  cities:string[] = ["New Delhi", "Mumbai", "Banglore", "Hyderabad","Kolkata"];



}
