import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { MOCK_EXPENSE } from '../../expenses/store/models/expense-mock-state';
import { BudgetsFacade } from '../budgets.facade';
import { MOCK_BUDGET } from '../store/models/budget-mock-state';

import { BudgetDetailsComponent } from './details.component';

const MockBudgetsFacade = {
  budgets$: of([MOCK_BUDGET]),
  expenses$: of([MOCK_EXPENSE]),
  loadBudget: () => null,
  loadExpensesForBudget: () => null,
  countExpenses: () => null,
  calcExpenseTotal: () => null,
  calcExpenseTotalForBudget: () => null,
  calcRemainingBudget: () => null,
  isDeficit: () => null,
};

describe('DetailsComponent', () => {
  let component: BudgetDetailsComponent;
  let fixture: ComponentFixture<BudgetDetailsComponent>;
  let mockStore: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [BudgetDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: BudgetsFacade, useValue: MockBudgetsFacade },
        {
          // https://www.joshuacolvin.net/mocking-activated-route-data-in-angular/
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                get: () => 1, // represents the budgetId
              },
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(BudgetDetailsComponent);
    mockStore = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
