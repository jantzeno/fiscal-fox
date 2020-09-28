import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Budget } from 'src/app/models/budget.model';
import { Expense } from 'src/app/models/expense.model';
import { ApplicationState } from '../../../store/models/application-state.model';
import { LogicService } from '../../../services/business/logic.service';

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

  ngOnInit(): void {}
}
