import { Component } from '@angular/core';
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [SectionTextComponent]
})
export class ExperienceComponent { }