import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Budget } from 'src/app/components/budget/store/models/budget.model';
import { Expense } from 'src/app/components/expense/store/models/expense.model';
import { ApplicationState } from '../../../store/models/application-state.model';
import { LogicService } from '../../../services/business/logic.service';
import { getSelectedBudget, loadBudget } from '../store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-budget-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetDetailsComponent implements OnInit {
  budget$: Observable<Budget>;
  expenses$: Observable<Expense[]>;

  constructor(
    private store: Store<ApplicationState>,
    public logic: LogicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.budget$ = this.store.select(getSelectedBudget);
    const id: number = this.route.snapshot.params.budgetId;
    this.store.dispatch(loadBudget({ budgetId: id }));
  }
}
