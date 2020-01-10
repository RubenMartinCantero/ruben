import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

// Para hacer uso del id se incluye, en el constructor el route y activated route, junto al import arriba
// En el constructor se añade route para el click del onEditRecipe y al pulsar edit enlazar con la ruta
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }


// Una forma de enlazar el id, const id = this.route.snapshot.params['id']; pero no nos interesa. Usaremos:
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  // Ahora puedo usar el id y las propiedades navigate
  onEditRecipe() {
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); Forma de hacerlo mas compleja
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

}
