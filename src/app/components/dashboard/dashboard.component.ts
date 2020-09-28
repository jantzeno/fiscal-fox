import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Budget } from 'src/app/models/budget.model';
import { Expense } from 'src/app/models/expense.model';
import {
  loadBudgets,
  loadExpenses,
  getBudgets,
  getExpenses,
} from 'src/app/store';
import { ApplicationState } from '../../store/models/application-state.model';
import { LogicService } from '../../services/business/logic.service';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  budgets$: Observable<Budget[]>;
  expenses$: Observable<Expense[]>;

  constructor(
    private store: Store<ApplicationState>,
    public logic: LogicService
  ) {}

  ngOnInit(): void {
    this.budgets$ = this.store.pipe(select(getBudgets));
    this.expenses$ = this.store.pipe(select(getExpenses));
    this.store.dispatch(loadBudgets());
    this.store.dispatch(loadExpenses());
  }

  // getExpenseCount(budget: Budget, expenses: Expense[]): number {
  //   return this.logic.countExpenses(budget, expenses);
  // }
}
