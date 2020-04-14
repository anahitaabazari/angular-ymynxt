import { Component, OnChanges , Input } from '@angular/core';

@Component({
 selector: 'pm-star',
 templateUrl: './star.component.html',
  styleUrls: [ './star.component.css' ]
})

export class StartComponent implements OnChanges
{
   @Input() rating : number;
   starWidth:  number;

   ngOnChanges() : void{
         
   }
}