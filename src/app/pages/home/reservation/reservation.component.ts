import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/ui/button/button.component";
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";

@Component({
  selector: 'app-reservation',
  standalone: true,
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  imports: [SectionTextComponent, ButtonComponent]
})
export class ReservationComponent { }
