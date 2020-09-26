import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AuthResponse,
  RegistrationResponse,
  LogoutResponse,
  Role,
} from '../../models/user.model';
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
    role: Role
  ): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(`${AUTH_URL}/register`, {
      username,
      password,
      email,
      role,
    });
  }

  login(username: string, password: string): Observable<AuthResponse> {
    console.log('Called Login');
    return this.http.post<AuthResponse>(`${AUTH_URL}/login`, {
      username,
      password,
    });
  }

  logout(token: string): Observable<LogoutResponse> {
    return this.http.post<LogoutResponse>(`${AUTH_URL}/logout`, { token });
  }
}
