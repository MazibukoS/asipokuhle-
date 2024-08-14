import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterNavbarComponent } from '../footer-navbar/footer-navbar.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { VenturesComponent } from '../ventures/ventures.component';
import { GroupFunctionsComponent } from '../group-functions/group-functions.component';
import { CommodityComponent } from '../commodity/commodity.component';
import { OilComponent } from '../oil/oil.component';
import { SafetyComponent } from '../safety/safety.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterNavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VenturesComponent,
    GroupFunctionsComponent,
    CommodityComponent,
    OilComponent,
    SafetyComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
