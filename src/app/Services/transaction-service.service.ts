import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../Models/Transaction.Model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url = "http://localhost:7259/api/v1/Cash/"

  constructor(private http: HttpClient) { }

  AddExpense(data: any) {
    return this.http.post(this.url + 'addBooking', data)
  }

  GetTransactions() {
    return this.http.get(this.url + 'transactions')
  }



  GetTransactionsFilter(startDate?: string, endDate?: string) {
    let params = new HttpParams();
    if (startDate) {
      params = params.set('startDate', startDate);
    }
    if (endDate) {
      params = params.set('endDate', endDate);
    }
    return this.http.get(this.url + 'transactionFilter', { params: params });
  }

}