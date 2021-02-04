import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameElementRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const name: string = this.nameElementRef.nativeElement.value;
    const amount: number = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingService.ingredientAddEvent.emit(ingredient);
  }
}
