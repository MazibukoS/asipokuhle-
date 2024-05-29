import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
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
