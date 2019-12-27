import { Component, OnInit, Input } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe:Recipe;

  ingredients:ingredient[]=[
    new ingredient("Prawn 100gms.",350),
    new ingredient("Onion 200gms.",40)
  ];
  constructor() { }

  ngOnInit() {
  }

  

}
