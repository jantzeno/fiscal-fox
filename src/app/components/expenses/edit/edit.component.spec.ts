import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { MOCK_BUDGET } from '../../budgets/store/models/budget-mock-state';
import { ExpensesFacade } from '../expenses.facade';
import { MOCK_EXPENSE } from '../store/models/expense-mock-state';

import { ExpenseEditComponent } from './edit.component';

const MockExpensesFacade = {
  budgets$: of([MOCK_BUDGET]),
  expenses$: of([MOCK_EXPENSE]),
  selectedExpense$: of(MOCK_EXPENSE),
  loadExpense: () => null,
  checkValidInput: () => null,
  getErrors: () => null,
};

describe('EditComponent', () => {
  let component: ExpenseEditComponent;
  let fixture: ComponentFixture<ExpenseEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ExpensesFacade, useValue: MockExpensesFacade },
        FormBuilder,
      ],
    });
    fixture = TestBed.createComponent(ExpenseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
