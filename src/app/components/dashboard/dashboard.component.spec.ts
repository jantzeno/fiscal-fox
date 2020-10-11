import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DashboardComponent } from './dashboard.component';
import { MemoizedSelector } from '@ngrx/store';
import { BudgetState } from 'src/app/components/budgets/store/models/budget-state.model';
import { getBudgets } from '../budgets/store';
import { Budget } from 'src/app/components/budgets/store/models/budget.model';
import { DashboardFacade } from './dashboard.facade';
import { of } from 'rxjs';
import { MOCK_BUDGET } from '../budgets/store/models/budget-mock-state';
import { MOCK_EXPENSE } from '../expenses/store/models/expense-mock-state';

const MockDashboardFacade = {
  budgets$: of([MOCK_BUDGET]),
  expenses$: of([MOCK_EXPENSE]),
  loadBudgets: () => null,
  loadExpenses: () => null,
  countExpenses: () => null,
  calcExpenseTotal: () => null,
  calcExpenseTotalForBudget: () => null,
  calcRemainingBudget: () => null,
  isDeficit: () => null,
};

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockStore: MockStore;
  let mockGetBudgetsSelector: MemoizedSelector<BudgetState, Array<Budget>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        provideMockStore(),
        { provide: DashboardFacade, useValue: MockDashboardFacade },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    mockStore = TestBed.inject(MockStore);
    mockGetBudgetsSelector = mockStore.overrideSelector(getBudgets, null);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
