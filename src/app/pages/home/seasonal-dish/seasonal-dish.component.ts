import { Component, OnInit } from '@angular/core';
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";

@Component({
  selector: 'app-seasonal-dish',
  standalone: true,
  templateUrl: './seasonal-dish.component.html',
  styleUrls: ['./seasonal-dish.component.scss'],
  imports: [SectionTextComponent]
})
export class SeasonalDishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
