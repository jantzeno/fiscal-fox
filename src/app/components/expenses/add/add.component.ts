import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense } from '../store/models/expense.model';
import { ExpensesFacade } from '../expenses.facade';
import { FormHelper } from '../../helpers/form-helper';

@Component({
  selector: 'app-expense-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseAddComponent implements OnInit {
  expenseForm: FormGroup;

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
          // Characters can be seperated by an underscore, hyphen, or space
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

  onSubmit() {
    if (this.expenseForm.valid) {
      const name = this.expenseForm.get('name').value;
      const amount = this.expenseForm.get('amount').value;

      const expense: Expense = {
        id: -1,
        name: name,
        budgetId: -1, // updated in facade
        amount: amount,
      };
      this.expensesFacade.createExpense(expense);
    }
  }
}
