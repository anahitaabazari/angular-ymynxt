import { Component ,OnInit } from '@angular/core';
import { IProduct } from './pp';


@Component({
  selector: 'pm-products',
  templateUrl: './Product-list.component.html',
   
  })

  export class ProductlistComponent implements OnInit {

    ProductService : _ProductService;
    filterproduc : IProduct[];
    products : IProduct[] ;

    constructor(private ProductService : Ps)
   {
          this._ProductService=ps;
   }
   
    ngOnInit() : void
    {
        products=this._ProductService.GetProducts();
        this.filterproduc=this.products;
        this.listfilter="";
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

     
  

    togglebtn()
    {
    }
      
  }
