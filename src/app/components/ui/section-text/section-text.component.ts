import { NgClass } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { SectionTextSize } from '@interfaces/section-text.interface';

@Component({
  selector: 'app-section-text',
  standalone: true,
  imports: [NgClass],
  templateUrl: './section-text.component.html',
  styleUrls: ['./section-text.component.scss']
})
export class SectionTextComponent implements OnInit {

  size = input<SectionTextSize>('sm');

  constructor() { }

  ngOnInit() {
  }

}
