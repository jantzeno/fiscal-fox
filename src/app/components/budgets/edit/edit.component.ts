import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Budget } from '../store/models/budget.model';
import { BudgetsFacade } from '../budgets.facade';
import { FormHelper } from '../../helpers/form-helper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetEditComponent implements OnInit {
  budgetForm: FormGroup;
  budget$: Observable<Budget>;

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

    // Load Budget
    this.budgetsFacade.loadBudget();
    // Get Selected Budget
    this.budget$ = this.budgetsFacade.selectedBudget$;
    // Update Form Values
    this.budgetsFacade.selectedBudget$.subscribe((budget) => {
      // Check for null or patchValue will fail
      if (budget) {
        this.budgetForm.patchValue({
          name: budget.name,
          amount: budget.amount,
        });
      }
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

  onSubmitUpdate() {
    if (this.budgetForm.valid) {
      const _name = this.budgetForm.get('name').value;
      const _amount = this.budgetForm.get('amount').value;
      let _id: number;
      this.budget$.subscribe((budget) => {
        _id = budget.id;
      });

      if (_id && _name && _amount) {
        this.budgetsFacade.updateBudget({
          id: _id,
          name: _name,
          amount: _amount,
        });
      }
    }
  }

  onSubmitDelete() {
    let _budget: Budget;
    this.budget$.subscribe((budget) => (_budget = budget));
    if (_budget) {
      this.budgetsFacade.deleteBudget(_budget);
    }
  }
}
