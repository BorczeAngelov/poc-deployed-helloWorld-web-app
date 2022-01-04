import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HelloWorldService } from './hello-world.service';
import { PingServerRespone } from './pingServerRespone';

@Component({
  selector: 'app-hello-world-component',
  templateUrl: './hello-world-component.component.html',
  styleUrls: ['./hello-world-component.component.css']
})
export class HelloWorldComponentComponent implements OnInit {

  pingServerRespone$: Observable<PingServerRespone> | undefined;
  serverApiUrl = environment.apiUrl;

  constructor(public helloWorldService: HelloWorldService) { }

  ngOnInit(): void {
  }

  pingServer(): void {
    this.pingServerRespone$ = this.helloWorldService.pingServer();
  }

}
