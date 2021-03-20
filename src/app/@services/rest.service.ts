import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public service_endpoint_url: String = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getData(url: string, type?): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.service_endpoint_url + url, { headers: headers });
  }

  postData(url: string, data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('X-Requested-With', 'XMLHttpRequest');
    return this.http.post(this.service_endpoint_url + url, data, { headers: headers }).pipe(catchError(this.handleError));
  }

  putData(url: string, data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('X-Requested-With', 'XMLHttpRequest');
    return this.http.put(this.service_endpoint_url + url, data, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  deleteData(url: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('X-Requested-With', 'XMLHttpRequest');
    return this.http.delete(this.service_endpoint_url + url, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
