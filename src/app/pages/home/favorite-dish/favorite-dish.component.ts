import { Component, OnInit } from '@angular/core';
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";
import { FavoriteDishCardComponent } from "./favorite-dish-card/favorite-dish-card.component";
import type { FavoriteDish } from '@interfaces/favorite-dish.interface';
import { favoriteDishes } from '@data/favorite-dishes';

@Component({
  selector: 'app-favorite-dish',
  standalone: true,
  templateUrl: './favorite-dish.component.html',
  styleUrls: ['./favorite-dish.component.scss'],
  imports: [SectionTextComponent, FavoriteDishCardComponent]
})
export class FavoriteDishComponent implements OnInit {

  items: FavoriteDish[] = [];

  constructor() {
    this.items = favoriteDishes;
  }

  ngOnInit() {
  }

}
