import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../../components/user/store/models/user.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';
const USER_URL = `${BASE_URL}/user`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${USER_URL}/`);
  }

  updateUser(
    username: string,
    email: string,
    role: string
  ): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${USER_URL}/`, {
      username,
      email,
      role,
    });
  }

  updatePassword(password: string): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${USER_URL}/`, {
      password,
    });
  }

  deleteUser(): Observable<UserResponse> {
    return this.http.delete<UserResponse>(`${USER_URL}/`);
  }
}
