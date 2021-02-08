import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[];
    recipeSelectedEvent= new EventEmitter<Recipe>();
    selectedRecipe: Recipe;
    
    constructor() {
        this.recipes = [
            new Recipe('Pasta', 
                'This is simply a test', 
                'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
                [
                    new Ingredient('pasta', 3),
                    new Ingredient('Tomato Sauce', 1)
                ]
            ),
        
            new Recipe('Samosa', 
                'Indian street food', 
                'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',
                [
                    new Ingredient('Potato', 4),
                    new Ingredient('Onions', 1),
                    new Ingredient('Chilli', 5),
                    new Ingredient('Masala powder', 3),
                ]
            ),
        ]
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }
}