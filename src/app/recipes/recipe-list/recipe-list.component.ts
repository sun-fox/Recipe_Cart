import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Prawn Spun Dish',"It is a tasty dish.","https://p1.pxfuel.com/preview/663/345/116/fried-prawn-prawn-seafood-lunch.jpg"),
    new Recipe('Prawn Spun Dish',"It is a tasty dish.","https://p1.pxfuel.com/preview/663/345/116/fried-prawn-prawn-seafood-lunch.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
