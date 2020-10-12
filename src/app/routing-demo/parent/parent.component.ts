import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productSelected:boolean = false;
  selectedProduct : string;
  onSelectProduct(product)
  {
    this.productSelected = true;
    this.selectedProduct = product;
  }
  addedProduct:any;
  onAddProduct(){
this.addedProduct = this.selectedProduct;
  } 
}
