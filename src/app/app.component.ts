import { Component } from '@angular/core';
import { HeaderComponent } from "./components/structural/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/structural/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
