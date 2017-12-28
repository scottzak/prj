import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('wheat bread', 2, 'slices');
    new Ingredient('gruyere cheese', 2, 'oz.', 'grated');
    new Ingredient('butter', 1, 'tbsp.');
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
