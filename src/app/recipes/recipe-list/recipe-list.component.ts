import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetailEvent=new EventEmitter<Recipe>();
  public recipes: Recipe[] =[ new Recipe('Rice','it is white','assets/images/download.jpeg'),new Recipe('Noodles','it is long','assets/images/download.jpeg')];
  constructor() { }

  ngOnInit(): void {
  }
  onViewRecipeDetailEvent(rec:Recipe)
  {
    this.recipeDetailEvent.emit(rec);
  }
}
