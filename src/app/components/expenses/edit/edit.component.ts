import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense } from '../store/models/expense.model';
import { ExpensesFacade } from '../expenses.facade';
import { FormHelper } from '../../helpers/form-helper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseEditComponent implements OnInit {
  expenseForm: FormGroup;
  expense$: Observable<Expense>;

  constructor(
    private expensesFacade: ExpensesFacade,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          // Start and end with a letter or number
          // Characters can be seperated by and underscore, hyphen, or space
          Validators.pattern(FormHelper.namePattern),
        ],
      ],
      amount: [
        '',
        [
          Validators.required,
          // Must be a number
          Validators.pattern(FormHelper.amountPattern),
        ],
      ],
    });

    // Load Expense
    this.expensesFacade.loadExpense();
    // Get Selected Expense
    this.expense$ = this.expensesFacade.selectedExpense$;
    // Update Form Values
    this.expensesFacade.selectedExpense$.subscribe((expense) => {
      // Check for null or patchValue will fail
      if (expense) {
        this.expenseForm.patchValue({
          name: expense.name,
          amount: expense.amount,
        });
      }
    });
  }

  checkValidInput(fieldName): boolean {
    if (fieldName) {
      return this.expensesFacade.checkValidInput(this.expenseForm, fieldName);
    } else {
      return false;
    }
  }

  getErrors(fieldName) {
    if (fieldName) {
      return this.expensesFacade.getErrors(this.expenseForm, fieldName);
    } else {
      return null;
    }
  }

  onSubmitUpdate() {
    if (this.expenseForm.valid) {
      const _name = this.expenseForm.get('name').value;
      const _amount = this.expenseForm.get('amount').value;
      let _id: number;
      let _budgetId: number;
      this.expense$.subscribe((expense) => {
        _id = expense.id;
        _budgetId = expense.budgetId;
      });

      if (_id && _name && _amount) {
        this.expensesFacade.updateExpense({
          id: _id,
          budgetId: _budgetId,
          name: _name,
          amount: _amount,
        });
      }
    }
  }

  onSubmitDelete() {
    let _expense: Expense;
    this.expense$.subscribe((expense) => (_expense = expense));
    if (_expense) {
      this.expensesFacade.deleteExpense(_expense);
    }
  }
}
