import { I18nPluralPipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shopping-list/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('displayRecipe') recipe: Recipe;
  
  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingService
  ) {}

  ngOnInit(): void {
  }

  addToCart() {
    this.shoppingService.addToCartEvent.emit(this.recipe.ingredients);
  }
}