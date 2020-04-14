import { Component, OnChanges } from '@angular/core';

@Component({
 selector: 'pm-star',
 templateUrl: ''
})

export class StartComponent implements OnChanges
{
   rating : number=4;
   starWidth:  number;

   ngOnChanges() : void{
         
   }
}