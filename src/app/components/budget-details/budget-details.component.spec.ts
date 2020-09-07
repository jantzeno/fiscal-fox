import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetDetailsComponent } from './budget-details.component';
import { Expense } from 'src/app/models/expense';

describe('BudgetDetailsComponent', () => {
  let component: BudgetDetailsComponent;
  let fixture: ComponentFixture<BudgetDetailsComponent>;

  //Mock Data
  let softExp = new Expense('Create Suite', 200, 1);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetDetailsComponent);
    component = fixture.componentInstance;

    component.expense = softExp;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an expense', () => {
    expect(component.expense).toBeTruthy();
    expect(component.expense.name).toEqual(softExp.name);
    expect(component.expense.amount).toEqual(softExp.amount);
  });
});
