import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  msg:string = "";
  onAddCart()
  {
this.msg = "Product Added To Cart"
  }
  // onInputClick(event)
  // {
  //   console.log();
  // }


  onProductAdd(event)
  {
    this.msg = event.target.value + " Added in Cart";
  }


  getinputInfo(my)
  {
      console.log(my.value);
  }
}
