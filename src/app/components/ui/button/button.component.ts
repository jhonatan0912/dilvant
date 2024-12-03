import { NgClass } from '@angular/common';
import { Component, HostListener, Input, input } from '@angular/core';
import { ButtonType } from '@interfaces/button.interface';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  type = input<ButtonType>('filled');


  @HostListener('click')
  onClick(): void {
    console.log('Button clicked');
  }
}
