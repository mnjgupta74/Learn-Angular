import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  multiStyle ={
    'margin': '15px'
  }
  SelectedProduct : string;
  getProductVal(val)
  {
    this.SelectedProduct = val.target.value;
  }
}