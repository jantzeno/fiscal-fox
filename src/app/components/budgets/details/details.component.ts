import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from 'src/app/components/budgets/store/models/budget.model';
import { Expense } from 'src/app/components/expenses/store/models/expense.model';
import { BudgetsFacade } from '../budgets.facade';

@Component({
  selector: 'app-budget-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetDetailsComponent implements OnInit {
  budget$: Observable<Budget>;
  expenses$: Observable<Expense[]>;

  constructor(private budgetsFacade: BudgetsFacade) {}

  ngOnInit(): void {
    this.budgetsFacade.loadBudget();
    this.budgetsFacade.loadExpensesForBudget();
    this.budget$ = this.budgetsFacade.selectedBudget$;
    this.expenses$ = this.budgetsFacade.expenses$;
  }

  getExpenseCount(budget: Budget, expenses: Expense[]): number {
    return this.budgetsFacade.countExpenses(budget, expenses);
  }

  getExpenseTotal(expenses: Expense[]): number {
    return this.budgetsFacade.calcExpenseTotal(expenses);
  }

  getExpenseTotalForBudget(budget: Budget, expenses: Expense[]): number {
    return this.budgetsFacade.calcExpenseTotalForBudget(budget, expenses);
  }

  getRemainingBudget(budget: Budget, expenses: Expense[]): number {
    return this.budgetsFacade.calcRemainingBudget(budget, expenses);
  }

  isDeficit(amount): boolean {
    return this.budgetsFacade.isDeficit(amount);
  }
}
