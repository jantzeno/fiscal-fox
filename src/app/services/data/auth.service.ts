import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, UserResponse } from '../../models/user.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';
const AUTH_URL = `${BASE_URL}/auth`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(username, password, email, role): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${AUTH_URL}/register`, {
      username,
      password,
      email,
      role,
    });
  }

  login(username, password): Observable<AuthResponse> {
    console.log('Called Login');
    return this.http.post<AuthResponse>(`${AUTH_URL}/login`, {
      username,
      password,
    });
  }

  logout(user: UserResponse): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${AUTH_URL}/logout`, { user });
  }
}
