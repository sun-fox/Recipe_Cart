import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  // @Output() globalrecipe = new EventEmitter<Recipe>();
  finalSelectedRecipe:Recipe= new Recipe('Pancakes and pastries', "Pancake with chocolate syrup on ceramic plate", "https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
  constructor() { }

  ngOnInit() {
  }

  RecievedRecipe(recipe:Recipe){
    // this.globalrecipe.emit(recipe);
    console.log("parent="+this.finalSelectedRecipe);
  }

}
