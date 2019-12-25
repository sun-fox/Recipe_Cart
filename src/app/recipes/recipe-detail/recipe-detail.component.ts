import { Component, OnInit } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  ingredients:ingredient[]=[
    new ingredient("Prawn 100gms.",350),
    new ingredient("Onion 200gms.",40)
  ];
  constructor() { }

  ngOnInit() {
  }

}
