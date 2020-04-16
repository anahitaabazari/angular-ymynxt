import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './pp';



@Injectable({
    providedIn: 'root'
  })


const productlis : IProduct[] =
[
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
export class ProductService{

 constructor(private http: HttpClient) { }

  
        getProducts()  {
          return productlis;
          
        }
}