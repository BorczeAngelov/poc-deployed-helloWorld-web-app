import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PingServerService } from './ping-server.service';
import { PingServerRespone } from './pingServerRespone';

@Component({
  selector: 'app-ping-server',
  templateUrl: './ping-server.component.html',
  styleUrls: ['./ping-server.component.css']
})
export class PingServerComponent implements OnInit {

  pingServerRespone$: Observable<PingServerRespone> | undefined;
  serverApiUrl = environment.apiUrl;

  constructor(public pingServerService: PingServerService) { }

  ngOnInit(): void {
  }

  pingServer(): void {
    this.pingServerRespone$ = this.pingServerService.pingServer();
  }
}