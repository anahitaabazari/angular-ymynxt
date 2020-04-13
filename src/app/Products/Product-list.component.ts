import { Component } from '@angular/core';
import { IProduct } from './Product'

@Component({
  selector: 'pm-products',
  templateUrl: './Product-list.component.html'})

  export class ProductlistComponent{
    pagetilet : string ="test Product list";
    listfilter : string ="card";
    products : IProduct[] =[
      {
      "productId" : 1,
      "productName" : "name1"
      },
       {
      "productId" : 2,
      "productName" : "NNName2222"
      }
    ]

    togglebtn()
    {
      

    }
      
  }
