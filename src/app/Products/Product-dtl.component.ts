import {Component ,OnInit } from '@angular/core'
import {IProduct } from './pp'
import { ActivatedRoute } from '@angular/router'

@Component({
      selector: 'pm-products-detail',
      templateUrl: './Product-list.component.html',
  })

  export class productdtl implements OnInit {

    constructor(private route: ActivatedRoute){

    }

    ngOnInit()
    {

    }
  }