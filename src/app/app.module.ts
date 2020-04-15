import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductlistComponent } from './Products/Product-list.component';
import { ConvertToSpacesPipe } from './Products/convert-to-spaces.pipe';
import { StartComponent } from './Shared/star.component';
import { ProductService } from './product.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductlistComponent , ConvertToSpacesPipe, StartComponent ],
  bootstrap:    [ AppComponent ],
   providers: [ProductService],
 
})
export class AppModule { }
