import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    protected http: HttpClient,
  ) { }

  get(url: string, data?: object): Promise<any> {
    return this._promise(this.http.get<any>(this._query(url, data), { headers: this._headers(data) }));
  }

  post(url: string, data: object): Promise<any> {
    return this._promise(this.http.post<any>(url, data, { headers: this._headers(data) }));
  }

  put(url: string, data: object): Promise<any> {
    return this._promise(this.http.put<any>(url, data, { headers: this._headers(data) }));
  }

  delete(url: string, data?: object): Promise<any> {
    return this._promise(this.http.delete<any>(this._query(url, data), { headers: this._headers(data) }));
  }

  private _promise(obs: Observable<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      const sub = obs
        .pipe(
          take(1)
        ).subscribe(
          (data: any) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );

    });
  }

  private _query(url: string, data?: object): string {
    const str: string[] = [];
    for (let [key, value] of Object.entries(data || {})) {
      if (Array.isArray(value)) {
        Array.from(value).forEach((v, i) => {
          const value = encodeURIComponent(v);
          str.push(`${key}[${i}]=${value}`);
        });
      } else {
        str.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
    if (str.length > 0) {
      url = `${url}?${str.join('&')}`;
    }
    return url;
  }

  private _headers(body: any): HttpHeaders {
    let head = new HttpHeaders();
    if (body instanceof FormData) {
      head = head.set('Content-Type', 'multipart/form-data');
    } else {
      head = head.set('Content-Type', 'application/json');
    }
    return head;
  }
}
