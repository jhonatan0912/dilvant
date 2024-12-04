import { Component } from '@angular/core';
import { favoriteDishes } from '@data/favorite-dishes';
import type { FavoriteDish } from '@interfaces/favorite-dish.interface';
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";
import { FavoriteDishCardComponent } from "./favorite-dish-card/favorite-dish-card.component";

@Component({
  selector: 'app-favorite-dish',
  standalone: true,
  templateUrl: './favorite-dish.component.html',
  styleUrls: ['./favorite-dish.component.scss'],
  imports: [SectionTextComponent, FavoriteDishCardComponent]
})
export class FavoriteDishComponent {

  items: FavoriteDish[] = [];

  constructor() {
    this.items = favoriteDishes;
  }

}
