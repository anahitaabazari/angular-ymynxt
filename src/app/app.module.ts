import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductlistComponent } from './Products/Product-list.component';
import { ConvertToSpacesPipe } from './Products/convert-to-spaces.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductlistComponent , ConvertToSpacesPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
