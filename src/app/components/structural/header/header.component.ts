import { Component, signal } from '@angular/core';
import { NavigationItem } from '@interfaces/header-item.interface';
import { ButtonComponent } from "../../ui/button/button.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navItems: NavigationItem[] = [
    { id: 1, label: 'Inicio' },
    { id: 2, label: 'Menú' },
    { id: 3, label: 'Nosotros' },
    { id: 4, label: 'Reservas', submenu: [] },
  ];

  mobileMenuOpened = signal(true);

  onToggleMobileMenu(): void {
    this.mobileMenuOpened.set(!this.mobileMenuOpened());
  }
}
