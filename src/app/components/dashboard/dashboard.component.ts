import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Budget } from 'src/app/models/budget';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  budgets: Array<Budget>;

  constructor() {}

  ngOnInit(): void {
    //Mock Data
    let itBudget = new Budget('IT Budget', 5000, 1);
    let softExp = new Expense('Create Suite', 200, 1);
    let compExp = new Expense('Computer Refresh', 2000, 2);
    let copierExp = new Expense('Copier Lease', 500, 3);
    itBudget.expenses = new Map([
      [1, softExp],
      [2, compExp],
      [3, copierExp],
    ]);

    let partyBudget = new Budget('Christmas Party', 500, 2);
    partyBudget.expenses = new Map();

    this.budgets = [itBudget, partyBudget];
  }
}
