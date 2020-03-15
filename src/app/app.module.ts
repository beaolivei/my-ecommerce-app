import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpService } from './data.service';
import { ProductDisplayComponent } from './components/product-display/product-display.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, ProductDisplayComponent],
  bootstrap:    [ AppComponent ],
  providers: [HttpService]
})
export class AppModule { }
