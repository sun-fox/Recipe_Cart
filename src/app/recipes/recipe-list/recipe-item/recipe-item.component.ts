import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;
  @Output() selectedRecipe= new EventEmitter<Recipe>();
  constructor() { } 

  ngOnInit() {
  }

  onRecipeSelect(){
    this.selectedRecipe.emit(this.recipe);
    console.log("item.val="+this.recipe.name+","+this.recipe.imgAdd+","+this.recipe.desc);
  }

}
