import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
})

export class FilmListComponent implements OnInit {

  @Input( )films;
  @Input( ) selectedFilm;
  @Output( ) selectedfilmEvent = new EventEmitter <any>();
  selectItem(film: any) { /* Funcion que se ejecuta cuado esta en la lista */
    this.selectedfilmEvent.emit(film);
  }
  constructor() { }

  ngOnInit() {
  }
}
