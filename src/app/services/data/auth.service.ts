import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AuthResponse,
  RegistrationResponse,
  LogoutResponse,
} from '../../components/user/store/models/user.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';
const AUTH_URL = `${BASE_URL}/auth`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(
    username: string,
    password: string,
    email: string,
    role: string
  ): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(`${AUTH_URL}/register`, {
      username,
      password,
      email,
      role,
    });
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${AUTH_URL}/login`, {
      username,
      password,
    });
  }

  validateToken(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${AUTH_URL}/login`);
  }

  logout(): Observable<LogoutResponse> {
    return this.http.get<LogoutResponse>(`${AUTH_URL}/logout`);
  }
}
