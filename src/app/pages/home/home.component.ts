import { Component } from '@angular/core';
import { ExperienceComponent } from "./experience/experience.component";
import { FavoriteDishComponent } from "./favorite-dish/favorite-dish.component";
import { HeroComponent } from "./hero/hero.component";
import { PopularRecipesComponent } from "./popular-recipes/popular-recipes.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { SeasonalDishComponent } from "./seasonal-dish/seasonal-dish.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, PopularRecipesComponent, SeasonalDishComponent, FavoriteDishComponent, ExperienceComponent, ReservationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }
