import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  username = 'prueba';

  usertype = 'has pulsado el boton';

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
