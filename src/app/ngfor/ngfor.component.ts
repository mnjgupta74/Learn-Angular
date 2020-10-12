import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
products =[
  {img:'../../assets/images/Laptop.png',name:'Laptop',id:'1001',price:15000},
  {img:'assets/images/Mobile.png',name:'Mobile',id:'1002',price:11000},
  {img:'assets/images/Radio.png',name:'Radio',id:'1003',price:1000},
  {img:'assets/images/Desktop.png',name:'Desktop',id:'1004',price:20000},
  {img:'assets/images/Washing Machine.png',name:'Washing Machine',id:'1005',price:22000}
]
}
