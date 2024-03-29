import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('Test Recipe','This test description','https://www.spoonacular.com/whatever/pineapple.jpg'),
    new Recipe('Another Test Recipe','This test2 description','https://www.spoonacular.com/whatever/pineapple.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
