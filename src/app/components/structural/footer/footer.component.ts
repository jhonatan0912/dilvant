import { Component, OnInit } from '@angular/core';
import { sections } from '@data/footer-sections';
import { FooterSection } from '@interfaces/footer-item.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
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
