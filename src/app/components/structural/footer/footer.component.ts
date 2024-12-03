import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { sections } from '@data/footer-sections';
import { FooterSection } from '@interfaces/footer-item.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sections: FooterSection[] = [];

  constructor() {
    this.sections = sections;
  }

  ngOnInit() {
  }

}
