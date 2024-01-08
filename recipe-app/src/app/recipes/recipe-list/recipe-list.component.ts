import { Component } from '@angular/core';
import { RecipeComponent } from '../recipe/recipe.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe('chocolate mousse','','https://bakerbynature.com/wp-content/uploads/2023/08/Easy-Chocolate-Mousse-Baker-by-Nature-12636.jpg'),
    new Recipe('omlette', '','https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg')
  ];

  someString = 'some string';
  
  constructor()
  {}

  ngOnInit(){}

  addNewReciepe(){
    alert('hello!')
  }
}
