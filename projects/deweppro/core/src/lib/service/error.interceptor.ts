import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => {
      if (error.error instanceof ErrorEvent) {
        return throwError(`An error occurred: ${error.error.message}`);
      } else if (error.error.error) {
        return throwError(`${error.error.error}`);
      } else {
        return throwError(`Backend returned code ${error.status}, body was: ${error.message}`);
      }
    }));
  }
}
