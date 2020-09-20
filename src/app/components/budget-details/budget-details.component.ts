import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';

@Component({
  selector: 'app-budget-details',
  styleUrls: ['./budget-details.component.scss'],
  template: `<div>
    <p>{{ expense.name }} ... {{ expense.amount | currency }}</p>
  </div>`,
})
export class BudgetDetailsComponent implements OnInit {
  @Input() expense: Expense;

  constructor() {}

  ngOnInit(): void {}
}
