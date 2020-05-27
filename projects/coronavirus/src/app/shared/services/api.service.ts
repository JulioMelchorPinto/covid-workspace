import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Countries } from '../models/countries';
import { Global } from '../models/global';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = "http://api.covid19api.com";

  constructor(private httpClient: HttpClient) { }

  public getCountries(){
    return this.httpClient.get<Countries[]>(this.REST_API_SERVER+'/countries').pipe(catchError(this.handleError));
  }

  public getGlobal(){
    return this.httpClient.get<Global[]>(this.REST_API_SERVER+'/summary').pipe(catchError(this.handleError));
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
