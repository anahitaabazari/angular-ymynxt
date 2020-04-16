import { Component ,OnInit } from '@angular/core'
import { IProduct } from './pp'
import { ProductService } from   './product.service';


@Component({
      selector: 'pm-products',
      templateUrl: './Product-list.component.html',
         providers: [ProductService],
  })

  export class ProductlistComponent implements OnInit {

     public _ProductService : ProductService;
    filterproduc : IProduct[];
    products : IProduct[] ;
    cc: number;

    constructor(private Pss : ProductService)
   {
          this._ProductService = Pss;
   }
   
    ngOnInit() : void
    {
        this.products =this._ProductService.getProducts();
        this.filterproduc=this.products;
        this.listfilter="";
        //this.cc =this.filterproduc.length;
        this.cc =;
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
