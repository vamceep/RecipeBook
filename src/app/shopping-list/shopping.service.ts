import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    ingredientAddEvent = new EventEmitter<Ingredient>();
    addToCartEvent = new EventEmitter<Ingredient[]>();
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    getIngredientsList() {
        return this.ingredients.slice();
    }

    addIngredientsList(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }

}