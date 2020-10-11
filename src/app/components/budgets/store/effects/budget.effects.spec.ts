import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import {
  BudgetResponse,
  BudgetsResponse,
} from '../../../../services/http/models/budgets-response.model';
import { BudgetService } from '../../../../services/http/budget.service';
import { MOCK_STORE$ } from 'src/app/store/testing';
import * as BudgetActions from '../actions';
import { MOCK_BUDGET } from '../models/budget-mock-state';
import { BudgetEffects } from './budget.effects';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

const mockBudgetsService = {
  getBudgets: () => of([MOCK_BUDGET]),
  getBudget: () => of(MOCK_BUDGET),
  createBudget: () => of(MOCK_BUDGET),
  updateBudget: () => of(MOCK_BUDGET),
  deleteBudget: () => of(Boolean),
};

const mockBudgetsResponse: BudgetsResponse = { budgets: [MOCK_BUDGET] };
const mockBudgetResponse: BudgetResponse = { budget: MOCK_BUDGET };

describe('BudgetsEffects', () => {
  let actions$: Observable<any>;
  let budgetService: BudgetService;
  let effects: BudgetEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BudgetEffects,
        provideMockActions(() => actions$),
        { provide: Store, useValue: MOCK_STORE$ },
        { provide: BudgetService, useValue: mockBudgetsService },
        // Fake route to satisfy Route in constructor
        {
          provide: Router,
          useValue: { navigate: ([route, extra]) => [route, extra] },
        },
      ],
    });
    effects = TestBed.inject(BudgetEffects);
    budgetService = TestBed.inject(BudgetService);
  });

  describe('loadBudgets$', () => {
    it('should successfully load budgets', () => {
      spyOn(budgetService, 'getBudgets').and.returnValue(
        of(mockBudgetsResponse)
      );
      actions$ = hot('a', {
        a: BudgetActions.loadBudgets(),
      });

      const expected$ = cold('b', {
        b: BudgetActions.loadBudgetsSuccess({ budgets: [MOCK_BUDGET] }),
      });

      expect(effects.loadBudgets$).toBeObservable(expected$);
    });

    it('should fail to load budgets', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(budgetService, 'getBudgets').and.returnValue(error$);
      actions$ = hot('a', {
        a: BudgetActions.loadBudgets(),
      });

      const expected$ = cold('b', {
        b: BudgetActions.loadBudgetsFailure({ error: errMsg }),
      });

      expect(effects.loadBudgets$).toBeObservable(expected$);
    });
  });

  describe('loadBudget$', () => {
    it('should successfully load a budget', () => {
      spyOn(budgetService, 'getBudget').and.returnValue(of(mockBudgetResponse));
      actions$ = hot('a', {
        a: BudgetActions.loadBudget({ budgetId: MOCK_BUDGET.id }),
      });

      const expected$ = cold('b', {
        b: BudgetActions.loadBudgetSuccess({ budget: MOCK_BUDGET }),
      });
      expect(effects.loadBudget$).toBeObservable(expected$);
    });

    it('should fail to load a budget', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(budgetService, 'getBudget').and.returnValue(error$);
      actions$ = hot('a', {
        a: BudgetActions.loadBudget({ budgetId: MOCK_BUDGET.id }),
      });

      const expected$ = cold('b', {
        b: BudgetActions.loadBudgetFailure({ error: errMsg }),
      });

      expect(effects.loadBudget$).toBeObservable(expected$);
    });
  });

  describe('createBudget$', () => {
    it('should successfully create a budget', () => {
      spyOn(budgetService, 'createBudget').and.returnValue(
        of(mockBudgetResponse)
      );
      actions$ = hot('a', {
        a: BudgetActions.createBudget({ budget: MOCK_BUDGET }),
      });

      const expected$ = cold('b', {
        b: BudgetActions.createBudgetSuccess({ budget: MOCK_BUDGET }),
      });
      expect(effects.createBudget$).toBeObservable(expected$);
    });

    it('should fail to create a budget', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(budgetService, 'createBudget').and.returnValue(error$);
      actions$ = hot('a', {
        a: BudgetActions.createBudget({ budget: MOCK_BUDGET }),
      });

      const expected$ = cold('b', {
        b: BudgetActions.createBudgetFailure({ error: errMsg }),
      });

      expect(effects.createBudget$).toBeObservable(expected$);
    });
  });

  describe('updateBudget$', () => {
    it('should successfully update a budget', () => {
      spyOn(budgetService, 'updateBudget').and.returnValue(
        of(mockBudgetResponse)
      );
      actions$ = hot('a', {
        a: BudgetActions.updateBudget({ budget: MOCK_BUDGET }),
      });

      const expected$ = cold('b', {
        b: BudgetActions.updateBudgetSuccess({ budget: MOCK_BUDGET }),
      });
      expect(effects.updateBudget$).toBeObservable(expected$);
    });

    it('should fail to update a budget', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(budgetService, 'updateBudget').and.returnValue(error$);
      actions$ = hot('a', {
        a: BudgetActions.updateBudget({ budget: MOCK_BUDGET }),
      });

      const expected$ = cold('b', {
        b: BudgetActions.updateBudgetFailure({ error: errMsg }),
      });

      expect(effects.updateBudget$).toBeObservable(expected$);
    });
  });

  describe('deleteBudget$', () => {
    it('should successfully delete a budget', () => {
      spyOn(budgetService, 'deleteBudget').and.returnValue(of(true));
      actions$ = hot('a', {
        a: BudgetActions.deleteBudget({ budget: MOCK_BUDGET }),
      });

      const expected$ = cold('b', {
        b: BudgetActions.deleteBudgetSuccess({ budget: MOCK_BUDGET }),
      });
      expect(effects.deleteBudget$).toBeObservable(expected$);
    });

    it('should fail to delete a budget', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(budgetService, 'deleteBudget').and.returnValue(error$);
      actions$ = hot('a', {
        a: BudgetActions.deleteBudget({ budget: MOCK_BUDGET }),
      });

      const expected$ = cold('b', {
        b: BudgetActions.deleteBudgetFailure({ error: errMsg }),
      });

      expect(effects.deleteBudget$).toBeObservable(expected$);
    });
  });
});
