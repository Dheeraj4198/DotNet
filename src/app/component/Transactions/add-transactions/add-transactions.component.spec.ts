import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionsComponent } from './add-transactions.component';

describe('AddTransactionsComponent', () => {
  let component: AddTransactionsComponent;
  let fixture: ComponentFixture<AddTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTransactionsComponent]
    });
    fixture = TestBed.createComponent(AddTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
