import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-transactions',
  templateUrl: './add-transactions.component.html',
  styleUrls: ['./add-transactions.component.css']
})
export class AddTransactionsComponent implements OnInit {

  @Input() title: string = '';
  addFormEvent: FormGroup = new FormGroup({});



  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddTransactionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.createForm();
      this.mapdata(data)
    }
  }

  ngOnInit() { }

  mapdata(data: any) {
    this.title = data.title;
  }

  createForm() {
    this.addFormEvent = this.formBuilder.group({
      upi: ['', null],
      cash: ['', null],
      used: ['', null],
      reason: ['', [Validators.required]]
    });
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
