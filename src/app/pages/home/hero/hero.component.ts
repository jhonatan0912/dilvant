import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/ui/button/button.component";
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [ButtonComponent, SectionTextComponent]
})
export class HeroComponent { }
