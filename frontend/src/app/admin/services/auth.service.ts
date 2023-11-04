import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminLoggedInSubject = new BehaviorSubject<boolean>(false);
  adminLoggedIn$ = this.adminLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8000/admin/login', user).pipe(
      tap((res: any) => {
        if (res.code == 200) {
          localStorage.setItem('amazon_admin', JSON.stringify(res));
          this.adminLoggedInSubject.next(true);
        }
      })
    );
  }
}
