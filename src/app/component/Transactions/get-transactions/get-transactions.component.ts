import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/Services/transaction-service.service';
import { AddTransactionsComponent } from '../add-transactions/add-transactions.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { DatePipe } from '@angular/common';
import { AddTransactionsComponent1 } from '../add-transactions copy/add-transactions1.component';

@Component({
  selector: 'app-get-transactions',
  templateUrl: './get-transactions.component.html',
  styleUrls: ['./get-transactions.component.css']
})
export class GetTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  total: any;

  startDate: Date | any;
  endDate: Date | any;

  @Inject(MAT_DIALOG_DATA) public data: any;


  constructor(private router: Router,
    private service: TransactionService,
    private datePipe: DatePipe,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAllTransactions() {
    this.service.GetTransactions().subscribe((res: any) => {
      // this.transactions = res

      const transactions = res.map((transaction: { receivedDate: any; }) => {
        const receivedDateTime = transaction.receivedDate;
        const date = receivedDateTime.toString().split('T')[0];
        const time = receivedDateTime.toString().split('T')[1].split('.')[0];

        return {
          ...transaction,
          date: date,
          time: time
        };
      });

      this.transactions = transactions;


      this.total = this.transactions.reduce((acc: number, item: { upi: string; cash: string; used: string; }) => {
        const upi = parseInt(item.upi) || 0;
        const cash = parseInt(item.cash) || 0;
        const used = parseInt(item.used) || 0;
        return acc + upi + cash - used;
      }, 0);

    });
  }


  getAll() {

    const start = this.startDate ? this.startDate + 'T00:00:00' : "";
    const end = this.endDate ? this.endDate + 'T23:59:00' : "";

    this.service.GetTransactionsFilter(start, end).subscribe((res: any) => {
      const transactions = res.map((transaction: { receivedDate: any; }) => {
        const receivedDateTime = transaction.receivedDate;
        const date = receivedDateTime.toString().split('T')[0];
        const time = receivedDateTime.toString().split('T')[1].split('.')[0];

        return {
          ...transaction,
          date: date,
          time: time
        };
      });

      this.transactions = transactions;

      this.total = this.transactions.reduce((acc: number, item: { upi: string; cash: string; used: string; }) => {
        const upi = parseInt(item.upi) || 0;
        const cash = parseInt(item.cash) || 0;
        const used = parseInt(item.used) || 0;
        return acc + upi + cash - used;
      }, 0);
    });
  }

  onClick() {
    // this.router.navigate(['/addExpense'])

    const dialogRef = this.dialog.open(AddTransactionsComponent1, {
      width: "600px",
      data: { title: 'Add Expense' },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {

        const date = new Date()
        const myDate = this.datePipe.transform(date, 'yyyy-MM-dd');
        const formattedTime = this.datePipe.transform(date, 'HH:mm:ss');
        const createdDate = myDate + "T" + formattedTime;

        const newEvent = {
          upi: result.upi,
          cash: result.cash,
          used: result.used,
          reason: result.reason,
          receivedDate: createdDate
        };
        this.service.AddExpense(newEvent).subscribe({
          next: (response: any) => {
            this.getAll();
          }
        });

      }
    });

  }


}
