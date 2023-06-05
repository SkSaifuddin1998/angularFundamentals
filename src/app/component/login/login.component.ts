import { Component, Inject } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string="";
  password:string="";
  msg:string="";

  constructor(@Inject(LoginService) private loginService:LoginService){
  }

  CheckLogin(){
    if(this.loginService.checkUnameAndPwd(this.username,this.password)==true){
        this.msg = "Login Successful...";
    }else{
        this.msg = "Invalid Credentials...";
        //txt1.focus();
    }
  }

}
