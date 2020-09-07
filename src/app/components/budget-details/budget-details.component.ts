import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.scss'],
})
export class BudgetDetailsComponent implements OnInit {
  @Input() expenses: Array<Expense>;

  constructor() {}

  ngOnInit(): void {}
}
