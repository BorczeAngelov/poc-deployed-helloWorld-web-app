import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { PingServerRespone } from './pingServerRespone';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  private apiControllerSuffix = "helloworld/"

  constructor(private http: HttpClient) { }


  pingServer(): Observable<PingServerRespone> {
    console.log("This is pingServer()");

    return this.http.get<PingServerRespone>(environment.apiUrl + this.apiControllerSuffix)
      .pipe(
        tap(data => console.log(data))
      );

  }
}
