import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
dynName:string = "Manoj Gupta"
prnName:string = "Angular Learning"
myMethod()
{
    return "My Project name is " + this.prnName
}
appStatus:boolean = false;
Status1 = "Online";
Status2 = "Offline"
}
