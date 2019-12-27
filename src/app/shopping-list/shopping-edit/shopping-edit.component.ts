import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
  @Output() IngredientAdded = new EventEmitter<ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    var obj = {name,amount};
    this.IngredientAdded.emit(obj);
    console.log(this.nameInputRef.nativeElement.value);
    console.log(this.amountInputRef.nativeElement.value)
    console.log(obj);
  }
}
