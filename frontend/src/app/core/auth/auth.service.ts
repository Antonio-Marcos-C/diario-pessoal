import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

type AuthResponse = { token: string };

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiBase = 'http://localhost:8080';
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  login(dto: { email: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.apiBase}/auth/login`, dto).pipe(
      tap(res => localStorage.setItem(this.tokenKey, res.token))
    );
  }

  register(dto: { nomeCompleto: string; email: string; password: string }) {
    return this.http.post(`${this.apiBase}/auth/register`, dto);
  }

  logout() { localStorage.removeItem(this.tokenKey); }

  isLoggedIn(): boolean { return !!localStorage.getItem(this.tokenKey); }

  get token(): string | null { return localStorage.getItem(this.tokenKey); }
}
