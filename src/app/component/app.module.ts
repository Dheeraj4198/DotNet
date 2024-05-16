import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrandsComponent } from './Brand/brands/brands.component';
import { WeatherComponent } from './weather/weather.component';
import { AddBrandsComponent } from './Brand/add-brands/add-brands.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTransactionsComponent } from './Transactions/add-transactions/add-transactions.component';
import { GetTransactionsComponent } from './Transactions/get-transactions/get-transactions.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AddTransactionsComponent1 } from './Transactions/add-transactions copy/add-transactions1.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    WeatherComponent,
    AddBrandsComponent,
    GetTransactionsComponent,
    AddTransactionsComponent,
    AddTransactionsComponent1,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule

  ],
  // providers: [],
  providers: [DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
