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

  headings: string[] = ['Who we are', 'Mission', 'Vision', 'Values'];
  descriptions: string[] = [
    `Asipokuhle Holdings is an investment holding company with a focus on
        long-term investment opportunities. We specialize in forging
        partnerships with financial entities renowned for successful investments
        across various industries.`,
    ` To build long-term relationships and be the preferred trading partner of
        choice to our clients.`,
    ` We’re always on the look-out for world classproducts and suppliers to
        complement our range, which in turn, gives our customers access to these
        products.`,
    `Innovation, 
     Integrity,
     Sustainability,
     Flexibility,
     Collaboration`,
  ];
  activeIndex: number | null = null;

  setActive(index: number | null) {
    this.activeIndex = index;
  }
}
