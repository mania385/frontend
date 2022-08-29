import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse}  from '@angular/common/http';
import { ScholarshipApplication } from '../models/scholarship-application';
import { catchError } from 'rxjs/operators';
import { pipe, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipsService {

  _url = 'http://localhost:3000/scholarship';
  constructor(private _http: HttpClient) { }

  scholarship(scholarshipApplication: ScholarshipApplication) {
    return this._http.post<any>(this._url, scholarshipApplication);
            pipe(catchError(this.errorHandler))

  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
