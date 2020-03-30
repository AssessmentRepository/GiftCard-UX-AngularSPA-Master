import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlaceGiftCardOrderPageComponent } from './place-gift-card-order-page/place-gift-card-order-page.component';
import { ViewGiftCardOrdersComponent } from './view-gift-card-orders/view-gift-card-orders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: "landing-page", component: LandingPageComponent },
  { path: "place-gift-card-order-page", component: PlaceGiftCardOrderPageComponent },
  { path: "view-gift-card-orders",component: ViewGiftCardOrdersComponent },
  { path: "contact-us",component: ContactUsComponent },
  { path: "**", redirectTo: "landing-page" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
