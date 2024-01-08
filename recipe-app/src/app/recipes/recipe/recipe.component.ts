import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
 @Input() public recipe:Recipe = new Recipe("default","default","default");

//   constructor(recipe:Recipe){
//     this.recipe = recipe;
//   }
}
