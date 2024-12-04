import { Component, input } from '@angular/core';
import type { Recipe } from '@interfaces/recipe.interface';

@Component({
  selector: 'app-popular-recipe-card',
  standalone: true,
  templateUrl: './popular-recipe-card.component.html',
  styleUrls: ['./popular-recipe-card.component.scss'],
})
export class PopularRecipeCardComponent {

  recipe = input.required<Recipe>();

}
