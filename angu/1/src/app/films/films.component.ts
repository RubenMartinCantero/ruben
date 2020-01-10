import {Component, OnInit } from '@angular/core';
import {Film} from '../Interfaces/Films';
import {FilmsService } from '../films.service';
import {ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})


export class FilmsComponent implements OnInit {
/* Si queremos crear una nueva clase, lo hacemos aqui. */

   films = [];

  constructor(private filmService: FilmsService, private route: ActivatedRoute) { }
   /* filmService es la nueva, FilmsService importa de films.service.ts */

  selectedFilm;

  selectItem(film) {
    // console.log(film);
    this.selectedFilm = film;
  }
  ngOnInit() { /* Se ejecuta al iniciar el componente */
    this.filmService.getFilms()
    .subscribe((films: Film[]) => { this.films = films;
      this.route.paramMap
      .subscribe((params: ParamMap) => {
        console.log(params.get('id'));
        let id = params.get('id');
        this.selectedFilm = films[id];
        console.log(this.selectedFilm);
      });
    });
  }
}

