import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { MOCK_EXPENSE } from '../../expenses/store/models/expense-mock-state';
import { BudgetsFacade } from '../budgets.facade';
import { MOCK_BUDGET } from '../store/models/budget-mock-state';

import { BudgetEditComponent } from './edit.component';

const MockBudgetsFacade = {
  budgets$: of([MOCK_BUDGET]),
  selectedBudget$: of(MOCK_BUDGET),
  loadBudget: () => null,
  checkValidInput: () => null,
  getErrors: () => null,
};

describe('EditComponent', () => {
  let component: BudgetEditComponent;
  let fixture: ComponentFixture<BudgetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: BudgetsFacade, useValue: MockBudgetsFacade },
        FormBuilder,
      ],
    });
    fixture = TestBed.createComponent(BudgetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
