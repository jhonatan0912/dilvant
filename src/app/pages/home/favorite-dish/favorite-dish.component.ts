import { Component, OnInit } from '@angular/core';
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";

@Component({
  selector: 'app-favorite-dish',
  standalone: true,
  templateUrl: './favorite-dish.component.html',
  styleUrls: ['./favorite-dish.component.scss'],
  imports: [SectionTextComponent]
})
export class FavoriteDishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
