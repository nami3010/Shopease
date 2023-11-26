import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Category } from '../models/category';
import { HttpHeaders } from '@angular/common/http';
import { ToastService } from '../../user/services/toast.service';
import { TOAST_ICONS, TOAST_STATE } from '../../user/shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient,public toast: ToastService) {}

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/category/list');
  }

  addCategory(catObj: Category): Observable<any[]> {
    const authorization = JSON.parse(
      JSON.stringify(localStorage.getItem('amazon_admin'))
    );
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: JSON.parse(authorization).token,
      }),
      observe: 'response',
    };

    return this.http.post<any[]>('http://localhost:8000/category/add', catObj, {
      headers:httpOptions.headers
    }).pipe(
      catchError((error) => {
        console.log(error);
        this.toast.showToast(
          TOAST_STATE.danger,
          "Internal server error",
          TOAST_ICONS.danger
        );
        return throwError(() => new Error('Internal server error')); // Return an observable to handle the error
      })
    );
  };
}
