import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiBase = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(dto: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiBase}/auth/login`, dto)
      .pipe(tap(res => localStorage.setItem('token', res.token)));
  }

  register(dto: { email: string; password: string; nomeCompleto: string }): Observable<any> {
    return this.http.post(`${this.apiBase}/auth/register`, dto);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }
}
