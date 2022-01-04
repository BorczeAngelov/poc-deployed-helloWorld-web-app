import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PingServerRespone } from './pingServerRespone';

@Injectable({
  providedIn: 'root'
})
export class PingServerService {

  private apiControllerSuffix = "helloworld/"

  constructor(private http: HttpClient) { }

  pingServer(): Observable<PingServerRespone> {
    return this.http.get<PingServerRespone>(environment.apiUrl + this.apiControllerSuffix);
  }
}
