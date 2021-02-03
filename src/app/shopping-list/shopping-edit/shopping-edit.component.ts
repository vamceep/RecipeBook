import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameElementRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  @Output() addElementEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const name: string = this.nameElementRef.nativeElement.value;
    const amount: number = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.addElementEvent.emit(ingredient);
  }
}
