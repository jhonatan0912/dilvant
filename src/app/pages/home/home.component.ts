import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { PopularRecipesComponent } from "./popular-recipes/popular-recipes.component";
import { SeasonalDishComponent } from "./seasonal-dish/seasonal-dish.component";
import { FavoriteDishComponent } from "./favorite-dish/favorite-dish.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, PopularRecipesComponent, SeasonalDishComponent, FavoriteDishComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
