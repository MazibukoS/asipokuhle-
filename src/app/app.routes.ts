import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { VenturesComponent } from '../ventures/ventures.component';
import { GroupFunctionsComponent } from '../group-functions/group-functions.component';
import { CommodityComponent } from '../commodity/commodity.component';
import { OilComponent } from '../oil/oil.component';
import { SafetyComponent } from '../safety/safety.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ventures', component: VenturesComponent },
  { path: 'gfunctions', component: GroupFunctionsComponent },
  { path: 'commodity', component: CommodityComponent },
  { path: 'oil', component: OilComponent },
  { path: 'safety', component: SafetyComponent },
  { path: '**', redirectTo: '' },
];
