import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-transactionss',
  templateUrl: './add-transactions1.component.html',
  styleUrls: ['./add-transactions1.component.css']
})
export class AddTransactionsComponent1 implements OnInit {

  @Input() title: string = '';

  addFormEvent: FormGroup = new FormGroup({});

  showUpiInput: boolean = false;
  showCashInput: boolean = false;
  showUtilizedInput: boolean = false;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddTransactionsComponent1>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createForm();
    if (data) {
      this.mapdata(data)
    }
  }

  ngOnInit() { }

  mapdata(data: any) {
    this.title = data.title;
  }

  createForm() {
    this.addFormEvent = this.formBuilder.group({
      upiCheckbox: [false],
      upi: ['', null],
      cashCheckbox: [false],
      cash: ['', null],
      utilizedCheckbox: [false],
      used: ['', null],
      reason: ['', [Validators.required]]
    });
  }

  toggleInput(type: string) {
    switch (type) {
      case 'upi':
        this.showUpiInput = !this.showUpiInput;
        break;
      case 'cash':
        this.showCashInput = !this.showCashInput;
        break;
      case 'utilized':
        this.showUtilizedInput = !this.showUtilizedInput;
        break;
    }
  }

  onAddEvent(): void {
    if (this.addFormEvent.valid) {
      const newEvent = {
        upi: this.addFormEvent.get('upi')?.value,
        cash: this.addFormEvent.get('cash')?.value,
        used: this.addFormEvent.get('used')?.value,
        reason: this.addFormEvent.get('reason')?.value,
      };
      this.dialogRef.close(newEvent);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}