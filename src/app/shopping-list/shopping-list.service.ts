import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged=new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[]=[
        new Ingredient('apples',5),
        new Ingredient('tomato',10)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}