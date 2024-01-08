import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import recipes from '../recipes';
@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  recipeName: string = '';
  recipeDescription: string = '';
  recipeImage: string = '';

  constructor(){
  }

  handleClick(recipeName: string, recipeDescription: string, recipeImage: string){
     this.recipeName = recipeName;
     this.recipeDescription = recipeDescription;
     this.recipeImage = recipeImage;

     var newRecipe = new Recipe(recipeName,recipeDescription,recipeImage);

     recipes.push(newRecipe);

     recipes.forEach(recipe => console.log(recipe.name));
  }

}
