import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ExpenseResponse,
  AllExpensesResponse,
} from '../../components/expense/store/models/expense.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';
const EXPENSE_URL = `${BASE_URL}/expenses`;

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  getAllExpenses(): Observable<AllExpensesResponse> {
    return this.http.get<AllExpensesResponse>(`${EXPENSE_URL}/`);
  }

  getExpense(id: number): Observable<ExpenseResponse> {
    return this.http.get<ExpenseResponse>(`${EXPENSE_URL}/${id}`);
  }

  createExpense(name: string, amount: number): Observable<ExpenseResponse> {
    return this.http.post<ExpenseResponse>(`${EXPENSE_URL}/`, { name, amount });
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

  deleteExpense(id: number): Observable<ExpenseResponse> {
    return this.http.delete<ExpenseResponse>(`${EXPENSE_URL}/${id}`);
  }
}
