import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DashboardComponent } from './dashboard.component';
import { MemoizedSelector } from '@ngrx/store';
import { BudgetState } from 'src/app/store/models/application-state.model';
import { getBudgets } from 'src/app/store';
import { Budget } from 'src/app/models/budget.model';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockStore: MockStore;
  let mockGetBudgetsSelector: MemoizedSelector<
    BudgetState,
    Map<number, Budget>
  >;

  // TODO: Make this better after getting used to Ngrx

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [DashboardComponent],
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

  it('may have budgets', (done) => {
    mockGetBudgetsSelector.setResult(null);
    mockStore.refreshState();
    component.budgets$.subscribe((budgets) => {
      expect(budgets).toBeNull();
      done();
    });
  });
});
