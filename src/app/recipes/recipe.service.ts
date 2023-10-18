import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{

    recipeSelected= new EventEmitter<Recipe>();
    
    private recipes: Recipe[]=[
        new Recipe('A test recipe','this is a test','https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63O2DBTTTEI6VKN5T6FVSMYA2A.jpg&w=860')
      ,  new Recipe('Another test recipe','this is a another test','https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63O2DBTTTEI6VKN5T6FVSMYA2A.jpg&w=860')
      
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}