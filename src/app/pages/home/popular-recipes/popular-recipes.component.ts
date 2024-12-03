import { Component, OnInit } from '@angular/core';
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";

@Component({
  selector: 'app-popular-recipes',
  standalone: true,
  templateUrl: './popular-recipes.component.html',
  styleUrls: ['./popular-recipes.component.scss'],
  imports: [SectionTextComponent]
})
export class PopularRecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
