import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('Test Recipe','This test description','https://www.spoonacular.com/whatever/pineapple.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
