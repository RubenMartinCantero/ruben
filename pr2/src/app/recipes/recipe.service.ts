import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a simple test',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 12),
      ]),
    new Recipe('Another test recipe',
    'this is a simple test',
    'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1-768x1075.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 3),
    ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    // return this.recipes.slice(index); Si quitamos slice y lo ponemos entre [] tb nos devuelve un array nuevo
    return this.recipes[index];
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}


