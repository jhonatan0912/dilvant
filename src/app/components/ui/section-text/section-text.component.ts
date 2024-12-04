import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import type { SectionTextSize } from '@interfaces/section-text.interface';

@Component({
  selector: 'app-section-text',
  standalone: true,
  imports: [NgClass],
  templateUrl: './section-text.component.html',
  styleUrls: ['./section-text.component.scss']
})
export class SectionTextComponent {

  size = input<SectionTextSize>('sm');

}
