import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './Brand/brands/brands.component';
import { WeatherComponent } from './weather/weather.component';
import { AddTransactionsComponent } from './Transactions/add-transactions/add-transactions.component';
import { GetTransactionsComponent } from './Transactions/get-transactions/get-transactions.component';
import { AddTransactionsComponent1 } from './Transactions/add-transactions copy/add-transactions1.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'addExpense',
    component: AddTransactionsComponent
  },
  {
    path: 'getTransactions',
    component: GetTransactionsComponent
  },


  {
    path: 'addExpense1',
    component: AddTransactionsComponent1
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
