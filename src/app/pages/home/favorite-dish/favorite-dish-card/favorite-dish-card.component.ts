import { Component, input, OnInit } from '@angular/core';
import type { FavoriteDish } from '@interfaces/favorite-dish.interface';

@Component({
  selector: 'app-favorite-dish-card',
  standalone: true,
  templateUrl: './favorite-dish-card.component.html',
  styleUrls: ['./favorite-dish-card.component.scss']
})
export class FavoriteDishCardComponent implements OnInit {

  item = input.required<FavoriteDish>();

  constructor() { }

  ngOnInit() {
  }

}
