import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Budget } from 'src/app/components/budget/store/models/budget.model';
import { Expense } from 'src/app/components/expense/store/models/expense.model';
import { ApplicationState } from '../../../store/models/application-state.model';
import { LogicService } from '../../../services/business/logic.service';
import { getSelectedBudget, getSelectedBudgetId } from '../store';

@Component({
  selector: 'app-budget-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class BudgetDetailsComponent implements OnInit {
  budget$: Observable<Budget>;
  expenses$: Observable<Expense[]>;

  constructor(
    private store: Store<ApplicationState>,
    public logic: LogicService
  ) {}

  ngOnInit(): void {
    this.budget$ = this.store.select(getSelectedBudgetId);
  }
}
