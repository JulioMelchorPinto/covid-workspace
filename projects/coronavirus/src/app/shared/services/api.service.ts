import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LastData } from '../models/last-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = "http://api.covid19api.com";

  constructor(private httpClient: HttpClient) { }

  public getCountries(){
    return this.httpClient.get(this.REST_API_SERVER+'/countries').pipe(catchError(this.handleError));
  }
  public getSummary(){
    return this.httpClient.get(this.REST_API_SERVER+'/summary').pipe(retry(3),catchError(this.handleError));
  }


  /* public getCurrentGlobal(){

    return this.httpClient.get<Global>('http://localhost:3000/Global').pipe(catchError(this.handleError));
  }
  public getCurrentCountries(){
    return this.httpClient.get<Countries>('http://localhost:3000/Countries').pipe(catchError(this.handleError));
  }
 */
  public getCountryDeathsTimeLine(country: string, status: string){
    return this.httpClient.get(this.REST_API_SERVER+'/country/${country}/status/${status}').pipe(catchError(this.handleError));
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
