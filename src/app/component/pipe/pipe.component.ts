import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  city:string = "Hyderabad";
  salary:number= 752487500;
  n:number=0.72;
  person:object = {firstname:"Adam",lastname:"Smith"};
  dt:Date = new Date();

}
