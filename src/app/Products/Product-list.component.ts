import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './Product-list.component.html'})

  export class ProductlistComponent{
    pagetilet : string ="test Product list";
    products :any[] =[
      {
      "Id" : 1,
      "name" : "name1"
      },
       {
      "Id" : 2,
      "name" : "name2222"
      }
    ]
      
  }
