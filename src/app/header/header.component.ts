import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ShoppingService } from '../shopping-list/shopping.service';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output()
  navigatorEvent = new EventEmitter<string>();

  constructor(private shoppingService: ShoppingService) {
   }

  ngOnInit(): void {
    this.shoppingService.addToCartEvent.subscribe(
      (ingredients: Ingredient[]) => this.shoppingService.addIngredientsList(ingredients)
    );
  }

  navigate(feature: string) {
    this.navigatorEvent.emit(feature);
  }
}