import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  values = [
    'innovation',
    'integrity',
    'sustainability',
    'flexibility',
    'collaboration',
  ];

  toggleVisibility(hideClass: string, showClass: string) {
    const hideElement = document.querySelector('.' + hideClass) as HTMLElement;
    const showElement = document.querySelector('.' + showClass) as HTMLElement;
    if (hideElement && showElement) {
      hideElement.style.display = 'none';
      showElement.style.display = 'block';
    }
  }
}
