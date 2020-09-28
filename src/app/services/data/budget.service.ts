import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BudgetResponse, AllBudgetsResponse } from '../../models/budget.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';
const BUDGET_URL = `${BASE_URL}/budgets`;

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor(private http: HttpClient) {}

  getAllBudgets(): Observable<AllBudgetsResponse> {
    return this.http.get<AllBudgetsResponse>(`${BUDGET_URL}/`);
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

  deleteBudget(id: number): Observable<BudgetResponse> {
    return this.http.delete<BudgetResponse>(`${BUDGET_URL}/${id}`);
  }
}
