import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { PopularRecipesComponent } from "./popular-recipes/popular-recipes.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, PopularRecipesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
