import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private budgetsFacade: BudgetsFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params.budgetId;
    this.budgetsFacade.loadBudget(id);
    this.budget$ = this.budgetsFacade.selectedBudget$;
  }
}
