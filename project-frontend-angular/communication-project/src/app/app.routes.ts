import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: 'order', component: OrderComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'card1', component: OrderComponent },
  { path: 'card2', component: OrderComponent },
  { path: 'card3', component: OrderComponent },
  { path: 'navimage', component: DashboardComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,RouterLink],
  exports: [RouterModule],

})
export class AppRoutingModule { }
