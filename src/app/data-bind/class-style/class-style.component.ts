import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // myPro:boolean = false;

  
  // myStyle1:string = "15px"

  // isActive : boolean = false;

  // multiClasses
  // ={
  //   class1:true,
  //   class2:true,
  //   class3:true,
  // }
  multiStyle ={
    'background': 'red',
    'border' : '10px solid green'
  }
}
