import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:ingredient[]=[
    new ingredient("Prawn 100gms.",350),
    new ingredient("Onion 200gms.",40)
  ];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ing:ingredient){
    this.ingredients.push(ing);
  }

}
