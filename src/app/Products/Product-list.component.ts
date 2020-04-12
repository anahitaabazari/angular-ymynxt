import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './Product-list.component.html'})

  export class ProductlistComponent{
    pagetilet : string ="test Product list";
    products :any[] =[
      {
      "Id" : 1,
      "Name" : "name1"
      },
       {
      "Id" : 2,
      "Name" : "name2222"
      }
    ]

    togglebtn()
    {
      

    }
      
  }
