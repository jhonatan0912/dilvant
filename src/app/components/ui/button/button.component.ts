import { NgClass } from '@angular/common';
import { Component, HostListener, input, output } from '@angular/core';
import type { ButtonType } from '@interfaces/button.interface';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  type = input<ButtonType>('filled');

  onClick = output<void>();

  @HostListener('click')
  handleClick(): void {
    this.onClick.emit();
  }
}
