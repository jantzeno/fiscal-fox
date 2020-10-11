import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ExpenseResponse,
  ExpensesResponse,
} from './models/expenses-response.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';
const EXPENSE_URL = `${BASE_URL}/expenses`;

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  getExpenses(): Observable<ExpensesResponse> {
    return this.http.get<ExpensesResponse>(`${EXPENSE_URL}/`);
  }

  getExpensesByBudgetId(id: number): Observable<ExpensesResponse> {
    return this.http.get<ExpensesResponse>(`${EXPENSE_URL}/budget/${id}`);
  }

  getExpense(id: number): Observable<ExpenseResponse> {
    return this.http.get<ExpenseResponse>(`${EXPENSE_URL}/${id}`);
  }

  createExpense(
    name: string,
    budgetId: number,
    amount: number
  ): Observable<ExpenseResponse> {
    return this.http.post<ExpenseResponse>(`${EXPENSE_URL}/`, {
      name,
      budgetId,
      amount,
    });
  }

  updateExpense(
    id: number,
    name: string,
    amount: number
  ): Observable<ExpenseResponse> {
    return this.http.put<ExpenseResponse>(`${EXPENSE_URL}/${id}`, {
      name,
      amount,
    });
  }

  deleteExpense(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${EXPENSE_URL}/${id}`);
  }
}
