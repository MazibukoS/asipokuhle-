import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
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

  activeIndex: number | null = null;

  setActive(index: number | null) {
    this.activeIndex = index;
  }

  selectedBlock: number | null = null;

  blocks = [
    {
      id: 1,
      text: ` Our operational and trading capabilities spread across partnering in
      numerous public and private sector initiated bids, and trade transactions.
      We focus on establishing global partnerships with private sector to
      initiate programmes that demonstrate social and economical merit for
      citizens.`,
      heading: 'Group functions',
    },
    {
      id: 2,
      text: ` We sell and transport carbon-based fuels all over the world, as well as
    working on various projects related to the sale of natural gas and biomass.
    Our operations currently concentrate predominantly on the trading of steam
    coal, coking coal and met coke, with major investment made in the latter two`,
      heading: 'Asipokuhle Commodity',
    },
    {
      id: 3,
      text: `Asipokuhle Safety Gear (Pty) Ltd was established in 2019 to provide a range
    of services from apparel, design and a combination of safety equipment for
    all scenarios. Coupled with in-house branding solutions, their extensive
    gifting, clothing and headwear ranges, backed up by deep inventory levels,
    provide clients with the comfort of knowing that they are able to focus on
    what they do best`,
      heading: 'Asipokuhle Safety Gear',
    },
    {
      id: 4,
      text: `Asipokuhle Energies is an independent reseller of bulk petroleum and lubricant
    products, specializing in quality onsite fuel storage facilities, forecourt
    equipment and fuel management solutions. As a company, we are passionate
    about innovative services, processes and technologies that enable our
    clients to achieve optimal fuel efficiency.`,
      heading: 'Asipokuhle Energies',
    },
  ];

  onSelectBlock(id: number) {
    if (id === 1) {
      this.router.navigate(['/gfunctions']);
    } else if (id === 2) {
      this.router.navigate(['/commodity']);
    } else if (id === 3) {
      this.router.navigate(['/safety']);
    } else if (id === 4) {
      this.router.navigate(['/oil']);
    }
  }
}
