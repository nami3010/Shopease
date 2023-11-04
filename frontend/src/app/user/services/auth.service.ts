import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any[]> {
    return this.http
      .post<any[]>('http://localhost:8000/user/signup', user)
      .pipe(
        tap((res: any) => {
          if (res.code == 200) {
            this.loggedInSubject.next(false);
          }
        })
      );
  }

  login(user: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8000/user/login', user).pipe(
      tap((res: any) => {
        if (res.code == 200) {
          localStorage.setItem('amazon_user', JSON.stringify(res));
          this.loggedInSubject.next(true);
        }
      })
    );
  }
}
