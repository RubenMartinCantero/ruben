import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})

// Se añade editMode = false, para controlar si el parametro id tiene un numero o si no tiene nada
// asi identificar si estamos en un recipe o queremo generar uno nuevo
// si edit mode es true, estamos dentro del modo editar la receta, si esta en false, es para crear new recipe
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
  }

}
