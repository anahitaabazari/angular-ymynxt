import {Component ,OnInit } from '@angular/core'
import {IProduct } from './pp'
import { ActivatedRoute } from '@angular/router'

@Component({
      selector: 'pm-products-detail',
      templateUrl: './Product-dtl.component.html',
  })

  export class productdtl implements OnInit {
    pageTitle :string="test";

    constructor(private route: ActivatedRoute,
    private router: Router,
    ){

    }

    ngOnInit()
    {
    let id =+this.route.snapshot.paramMap.get("productId");
    this.pageTitle += `: ${id}`
    }

     onBack() :void {
      this.router.navigate(['/products']);
    }
      
  }