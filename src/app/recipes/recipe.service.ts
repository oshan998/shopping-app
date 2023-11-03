import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService{

    
    
    private recipes: Recipe[]=[
        new Recipe('A test recipe','this is a test','https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63O2DBTTTEI6VKN5T6FVSMYA2A.jpg&w=860',[new Ingredient('meat',1),new Ingredient('french fries',20)])
      ,  new Recipe('Another test recipe','this is a another test','https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63O2DBTTTEI6VKN5T6FVSMYA2A.jpg&w=860',[new Ingredient('buns',2),new Ingredient('meat',2)])
      
      ];

      constructor(private slService:ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

    getRecipe(index:number){
      return this.recipes[index];
    }

      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredientss(ingredients);
      }
}