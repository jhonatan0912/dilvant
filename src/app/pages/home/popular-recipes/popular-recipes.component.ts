import { Component, OnInit } from '@angular/core';
import { recipes } from "@data/recipes";
import type { Recipe } from '@interfaces/recipe.interface';
import { ButtonComponent } from "../../../components/ui/button/button.component";
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";
import { PopularRecipeCardComponent } from "./popular-recipe-card/popular-recipe-card.component";

@Component({
  selector: 'app-popular-recipes',
  standalone: true,
  templateUrl: './popular-recipes.component.html',
  styleUrls: ['./popular-recipes.component.scss'],
  imports: [SectionTextComponent, ButtonComponent, PopularRecipeCardComponent]
})
export class PopularRecipesComponent {

  recipes: Recipe[] = [];

  constructor() {
    this.recipes = recipes;
  }
}
