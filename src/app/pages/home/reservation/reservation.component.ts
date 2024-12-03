import { Component, OnInit } from '@angular/core';
import { SectionTextComponent } from "../../../components/ui/section-text/section-text.component";
import { ButtonComponent } from "../../../components/ui/button/button.component";

@Component({
  selector: 'app-reservation',
  standalone: true,
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  imports: [SectionTextComponent, ButtonComponent]
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
