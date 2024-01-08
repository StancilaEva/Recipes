import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-menu/side-bar/side-bar.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent,SideBarComponent,RecipeComponent,RecipeListComponent, RecipeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-app';
}
