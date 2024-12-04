import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { sections } from '@data/footer-sections';
import type { FooterSection } from '@interfaces/footer-item.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  sections: FooterSection[] = [];

  constructor() {
    this.sections = sections;
  }
}
