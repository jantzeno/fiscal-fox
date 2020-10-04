import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BudgetResponse,
  BudgetsResponse,
} from './models/budgets-response.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';
const BUDGET_URL = `${BASE_URL}/budgets`;

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor(private http: HttpClient) {}

  getBudgets(): Observable<BudgetsResponse> {
    return this.http.get<BudgetsResponse>(`${BUDGET_URL}/`);
  }

  getBudget(id: number): Observable<BudgetResponse> {
    return this.http.get<BudgetResponse>(`${BUDGET_URL}/${id}`);
  }

  createBudget(name: String, amount: number): Observable<BudgetResponse> {
    return this.http.post<BudgetResponse>(`${BUDGET_URL}/`, {
      name,
      amount,
    });
  }

  updateBudget(
    id: number,
    name: String,
    amount: number
  ): Observable<BudgetResponse> {
    return this.http.put<BudgetResponse>(`${BUDGET_URL}/${id}`, {
      name,
      amount,
    });
  }

  deleteBudget(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${BUDGET_URL}/${id}`);
  }
}
