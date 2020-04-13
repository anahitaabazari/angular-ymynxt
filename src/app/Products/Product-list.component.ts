import { Component } from '@angular/core';
import { IProduct } from './pp';

@Component({
  selector: 'pm-products',
  templateUrl: './Product-list.component.html'})

  export class ProductlistComponent{
    pagetilet : string ="test Product list";
    _listfilter : string;

    get listfilter() : string{
      return this._listfilter;
    }

     set listfilter(value:string) 
     {
       this._listfilter = value;
    }

    filterproduc : IProduct[];
    products : IProduct[] =[
      {
      "productId" : 1,
      "productName" : "name-1"
      },
       {
      "productId" : 2,
      "productName" : "NNN-ame2222"
      },
       {
      "productId" : 3,
      "productName" : "NNN-333333"
      },
       {
      "productId" : 4,
      "productName" : "NNN-444444"
      }
    ]

    togglebtn()
    {
    }
      
  }
