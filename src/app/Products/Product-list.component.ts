import { Component ,OnInit } from '@angular/core';
import { IProduct } from './pp';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './Product-list.component.html'},
  providers = [ProductService]
  })

  export class ProductlistComponent implements OnInit {

    private _ProductService;
    constructor(ProductService : Ps)
   {
     this.filterproduc=this.products;
     this.listfilter="";
     this._ProductService=ps;
   }
    ngOnInit() : void
    {

    }
    pagetilet : string ="test Product list";
    _listfilter : string;

    get listfilter() : string{
      return this._listfilter;
    }

     set listfilter(value:string) 
     {
       this._listfilter = value;
   
       this.filterproduc =this._listfilter? this.PerformFilter(this._listfilter) : this.products;
    }

    PerformFilter(filterby:string) : IProduct[]
    {
      filterby= filterby.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterby) !=-1);
      
    }

      filterproduc : IProduct[];
    products : IProduct[] =[
      {
      "productId" : 1,
      "productName" : "name-1",
      "productRate" : 1,
      },
       {
      "productId" : 2,
      "productName" : "NNN-ame2222",
      "productRate" : 2,
      },
       {
      "productId" : 3,
      "productName" : "NNN-333333",
      "productRate":1,
      },
       {
      "productId" : 4,
      "productName" : "NNN-444444",
      "productRate":3,
      }
    ]
   

  

    togglebtn()
    {
    }
      
  }
