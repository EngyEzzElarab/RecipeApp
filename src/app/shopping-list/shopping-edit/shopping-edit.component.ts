import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) name: ElementRef;
  @ViewChild('amountInput',{static:false}) amount: ElementRef;
   
 // @Input() public list: Ingredient[];
  @Output() addEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAdd()
  {
    //this.list.push(new Ingredient(this.name,this.number));
    this.addEvent.emit(new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value));
    this.name.nativeElement.value="";
    this.amount.nativeElement.value="";
  }
}
