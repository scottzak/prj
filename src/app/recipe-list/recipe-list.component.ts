import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Grilled Cheese",
      "Grilled Cheese Sandwich",
      "http://3.bp.blogspot.com/-sNjCLFiv2hA/TrCPSiMOLmI/AAAAAAAAM70/EeRU8oOb980/s800/The%2BPerfect%2BGrilled%2BCheese%2BSandwich%2B500%2B4401.jpg"
      )
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
