import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorPageInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let uri = '';
        const message = err?.error || err?.message || err.statusText;
        if (err.status === 401) {
          uri = `/auth`;
        }
        if (err.status === 403) {
          uri = `/errors/access-denied`;
        }
        if (err.status === 404) {
          uri = `/errors/page-not-found`;
        }
        if (err.status >= 500) {
          uri = `/errors/page-5xx`;
        }
        if (uri.length > 0) {
          this.router.navigate([uri], {
            queryParams: {
              url: document.location.pathname,
              code: err.status,
              message: message,
            },
          });
          return EMPTY;
        }
        return throwError(() => new Error(message));
      })
    );
  }
}
