import { Component } from '@angular/core';
import { Employee } from 'src/app/entity/employee';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  fname:string = "Adam";
  lname:string = "Smith";
  age:number=25;
  gender:string="Male";
  country:string="India";
  isEmployed:boolean=true;

  employees:Employee[] = [
    new Employee(101, "John", 5000),
    new Employee(102, "Smith", 12000),
    new Employee(103, "Nick", 6000),
    new Employee(104, "Orlen", 8000),
    new Employee(105, "Charles", 9000),
];

searchemployees:Employee[] = [];

       constructor(){
          this.searchemployees = this.employees;
       }

       str:string = "";
       sortcolumn:string= "empId";
       order = 1;

       onSearchClick(){
          this.searchemployees = this.employees.filter((emp) =>  {
             return emp.empname.toLowerCase().indexOf(this.str.toLowerCase()) >=0;});
       }



  handleSubmitBtn(){
     this.fname = "John";
     this.lname="Buttler";
     this.age = 30;
     this.gender= "Male";
     this.country="USA";
     this.isEmployed=false;
  }

  newemployee:Employee = new Employee(0,"",0);

  onInsertClick(){
     this.employees.push(new Employee(this.newemployee.empId,this.newemployee.empname,this.newemployee.salary));
      this.newemployee.empId =0;
      this.newemployee.empname = "";
      this.newemployee.salary = 0;
  }

  onDeleteClick(n:number){
     if(confirm("Are you sure to delete this emp?"))
        this.employees.splice(n,1);

  }



}
