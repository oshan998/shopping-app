import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientChanged=new Subject<Ingredient[]>();
    private ingredients: Ingredient[]=[
        new Ingredient('apples',5),
        new Ingredient('tomato',10)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngredientss(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //   this.addIngredients(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}