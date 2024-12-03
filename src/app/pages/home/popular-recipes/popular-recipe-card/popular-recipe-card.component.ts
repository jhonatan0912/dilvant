import { Component, input, OnInit } from '@angular/core';
import type { Recipe } from '@interfaces/recipe.interface';

@Component({
  selector: 'app-popular-recipe-card',
  standalone: true,
  templateUrl: './popular-recipe-card.component.html',
  styleUrls: ['./popular-recipe-card.component.scss'],
})
export class PopularRecipeCardComponent implements OnInit {

  recipe = input.required<Recipe>();

  constructor() { }

  ngOnInit() {
  }

}
