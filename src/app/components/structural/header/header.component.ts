import { Component, HostListener, signal } from '@angular/core';
import type { NavigationItem } from '@interfaces/header-item.interface';
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

  mobileMenuOpened = signal(false);

  onToggleMobileMenu(): void {
    this.mobileMenuOpened.set(!this.mobileMenuOpened());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    if (target.innerWidth > 700) {
      this.mobileMenuOpened.set(false);
    }
  }
}
