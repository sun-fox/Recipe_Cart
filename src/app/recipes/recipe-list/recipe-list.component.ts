import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Prawn Spun Dish',"It is a tasty dish.","https://p1.pxfuel.com/preview/663/345/116/fried-prawn-prawn-seafood-lunch.jpg"),
    new Recipe('Grilled vegetable',"Grilled steak with vegetables on white ceramic plate","https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),
    new Recipe('Pancakes and pastries',"Pancake with chocolate syrup on ceramic plate","https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),
    new Recipe('Pepperoni Pizza',"Top view photo of pepperoni pizza beside brown cup filled with yellow liquid and ice cubes","https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"),
    new Recipe('Sandwich with boiled egg.',"Egg Sandwich","https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
  ];
  @Output() sendRecipe= new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  recipeSend(recipe:Recipe){
      this.sendRecipe.emit(recipe);
      console.log("list.val = "+recipe.name+","+recipe.desc+","+recipe.imgAdd)
  }
}
