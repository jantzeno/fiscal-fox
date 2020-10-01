import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Budget } from 'src/app/components/budget/store/models/budget.model';
import { getBudgets } from '../store';
import { BudgetState } from 'src/app/components/budget/store/models/budget-state.model';

import { BudgetDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: BudgetDetailsComponent;
  let fixture: ComponentFixture<BudgetDetailsComponent>;
  let mockStore: MockStore;
  // let mockGetBudgetsSelector: MemoizedSelector<BudgetState, Array<Budget>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [BudgetDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetDetailsComponent);
    mockStore = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    // mockGetBudgetsSelector = mockStore.overrideSelector(getBudgets, null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
