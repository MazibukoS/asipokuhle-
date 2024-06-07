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
      heading: 'Asiphokuhle Commodity',
    },
    {
      id: 3,
      text: `Asiphokuhle Safety Gear (Pty) Ltd was established in 2019 to provide a range
    of services from apparel, design and a combination of safety equipment for
    all scenarios. Coupled with in-house branding solutions, their extensive
    gifting, clothing and headwear ranges, backed up by deep inventory levels,
    provide clients with the comfort of knowing that they are able to focus on
    what they do best`,
      heading: 'Asiphokuhle Safety Gear',
    },
    {
      id: 4,
      text: `Mzansi Oil & Gas is an independent reseller of bulk petroleum and lubricant
    products, specializing in quality onsite fuel storage facilities, forecourt
    equipment and fuel management solutions. As a company, we are passionate
    about innovative services, processes and technologies that enable our
    clients to achieve optimal fuel efficiency.`,
      heading: 'Mzansi Oil & Gas',
    },
  ];

  onSelectBlock(id: number) {
    if (this.selectedBlock === id) {
      this.selectedBlock = null;
    } else {
      this.selectedBlock = id;
    }
  }
}
