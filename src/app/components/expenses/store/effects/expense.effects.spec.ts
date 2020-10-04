import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import {
  ExpenseResponse,
  ExpensesResponse,
} from '../../../../services/http/models/expenses-response.model';
import { ExpenseService } from '../../../../services/http/expense.service';
import { MOCK_STORE$ } from 'src/app/store/testing';
import * as ExpenseActions from '../actions';
import { MOCK_EXPENSE } from '../models/expense-mock-state';
import { ExpenseEffects } from './expense.effects';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

const mockExpensesService = {
  getExpenses: () => of([MOCK_EXPENSE]),
  getExpense: () => of(MOCK_EXPENSE),
  createExpense: () => of(MOCK_EXPENSE),
  updateExpense: () => of(MOCK_EXPENSE),
  deleteExpense: () => of(Boolean),
};

const mockExpensesResponse: ExpensesResponse = { expenses: [MOCK_EXPENSE] };
const mockExpenseResponse: ExpenseResponse = { expense: MOCK_EXPENSE };

describe('ExpensesEffects', () => {
  let actions$: Observable<any>;
  let expenseService: ExpenseService;
  let effects: ExpenseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExpenseEffects,
        provideMockActions(() => actions$),
        { provide: Store, useValue: MOCK_STORE$ },
        { provide: ExpenseService, useValue: mockExpensesService },
      ],
    });
    effects = TestBed.inject(ExpenseEffects);
    expenseService = TestBed.inject(ExpenseService);
  });

  describe('loadExpenses$', () => {
    it('should successfully load expenses', () => {
      spyOn(expenseService, 'getExpenses').and.returnValue(
        of(mockExpensesResponse)
      );
      actions$ = hot('a', {
        a: ExpenseActions.loadExpenses(),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.loadExpensesSuccess({ expenses: [MOCK_EXPENSE] }),
      });

      expect(effects.loadExpenses$).toBeObservable(expected$);
    });

    it('should fail to load expenses', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(expenseService, 'getExpenses').and.returnValue(error$);
      actions$ = hot('a', {
        a: ExpenseActions.loadExpenses(),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.loadExpensesFailure({ error: errMsg }),
      });

      expect(effects.loadExpenses$).toBeObservable(expected$);
    });
  });

  describe('loadExpense$', () => {
    it('should successfully load a expense', () => {
      spyOn(expenseService, 'getExpense').and.returnValue(
        of(mockExpenseResponse)
      );
      actions$ = hot('a', {
        a: ExpenseActions.loadExpense({ expenseId: MOCK_EXPENSE.id }),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.loadExpenseSuccess({ expense: MOCK_EXPENSE }),
      });
      expect(effects.loadExpense$).toBeObservable(expected$);
    });

    it('should fail to load a expense', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(expenseService, 'getExpense').and.returnValue(error$);
      actions$ = hot('a', {
        a: ExpenseActions.loadExpense({ expenseId: MOCK_EXPENSE.id }),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.loadExpenseFailure({ error: errMsg }),
      });

      expect(effects.loadExpense$).toBeObservable(expected$);
    });
  });

  describe('createExpense$', () => {
    it('should successfully create a expense', () => {
      spyOn(expenseService, 'createExpense').and.returnValue(
        of(mockExpenseResponse)
      );
      actions$ = hot('a', {
        a: ExpenseActions.createExpense({ expense: MOCK_EXPENSE }),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.createExpenseSuccess({ expense: MOCK_EXPENSE }),
      });
      expect(effects.createExpense$).toBeObservable(expected$);
    });

    it('should fail to create a expense', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(expenseService, 'createExpense').and.returnValue(error$);
      actions$ = hot('a', {
        a: ExpenseActions.createExpense({ expense: MOCK_EXPENSE }),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.createExpenseFailure({ error: errMsg }),
      });

      expect(effects.createExpense$).toBeObservable(expected$);
    });
  });

  describe('updateExpense$', () => {
    it('should successfully update a expense', () => {
      spyOn(expenseService, 'updateExpense').and.returnValue(
        of(mockExpenseResponse)
      );
      actions$ = hot('a', {
        a: ExpenseActions.updateExpense({ expense: MOCK_EXPENSE }),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.updateExpenseSuccess({ expense: MOCK_EXPENSE }),
      });
      expect(effects.updateExpense$).toBeObservable(expected$);
    });

    it('should fail to update a expense', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(expenseService, 'updateExpense').and.returnValue(error$);
      actions$ = hot('a', {
        a: ExpenseActions.updateExpense({ expense: MOCK_EXPENSE }),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.updateExpenseFailure({ error: errMsg }),
      });

      expect(effects.updateExpense$).toBeObservable(expected$);
    });
  });

  describe('deleteExpense$', () => {
    it('should successfully delete a expense', () => {
      spyOn(expenseService, 'deleteExpense').and.returnValue(of(true));
      actions$ = hot('a', {
        a: ExpenseActions.removeExpense({ expense: MOCK_EXPENSE }),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.removeExpenseSuccess({ expense: MOCK_EXPENSE }),
      });
      expect(effects.deleteExpense$).toBeObservable(expected$);
    });

    it('should fail to delete a expense', () => {
      const errMsg = 'Nope.';
      const error$ = cold('#', {}, errMsg);

      spyOn(expenseService, 'deleteExpense').and.returnValue(error$);
      actions$ = hot('a', {
        a: ExpenseActions.removeExpense({ expense: MOCK_EXPENSE }),
      });

      const expected$ = cold('b', {
        b: ExpenseActions.removeExpenseFailure({ error: errMsg }),
      });

      expect(effects.deleteExpense$).toBeObservable(expected$);
    });
  });
});
