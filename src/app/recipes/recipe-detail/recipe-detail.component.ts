import { I18nPluralPipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this. recipeService.getRecipeById(this.id);
      }
    )
  }

  addToCart() {
    this.shoppingService.addToCartEvent.emit(this.recipe.ingredients);
  }
}