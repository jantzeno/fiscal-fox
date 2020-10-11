import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Budget } from '../store/models/budget.model';
import { BudgetsFacade } from '../budgets.facade';
import { FormHelper } from '../../helpers/form-helper';

@Component({
  selector: 'app-budget-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class BudgetAddComponent implements OnInit {
  budgetForm: FormGroup;

  constructor(private budgetsFacade: BudgetsFacade, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.budgetForm = this.fb.group({
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
  }

  checkValidInput(fieldName): boolean {
    if (fieldName) {
      return this.budgetsFacade.checkValidInput(this.budgetForm, fieldName);
    } else {
      return false;
    }
  }

  getErrors(fieldName) {
    if (fieldName) {
      return this.budgetsFacade.getErrors(this.budgetForm, fieldName);
    } else {
      return null;
    }
  }

  onSubmit() {
    if (this.budgetForm.valid) {
      const name = this.budgetForm.get('name').value;
      const amount = this.budgetForm.get('amount').value;
      const budget: Budget = { id: -1, name: name, amount: amount };
      this.budgetsFacade.createBudget(budget);
    }
  }
}
