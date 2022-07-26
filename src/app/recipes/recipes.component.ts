import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RECIPES } from '../mock-recipes';
import { Recipe } from '../recipe';
import { RecipeService} from '../recipe.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

}
