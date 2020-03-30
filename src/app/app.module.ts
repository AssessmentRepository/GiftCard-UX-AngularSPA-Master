import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceGiftCardOrderPageComponent } from './place-gift-card-order-page/place-gift-card-order-page.component';
import { ViewGiftCardOrdersComponent } from './view-gift-card-orders/view-gift-card-orders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PlaceGiftCardOrderPageComponent,
    ViewGiftCardOrdersComponent,
    ContactUsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    PlaceGiftCardOrderPageComponent,
    ViewGiftCardOrdersComponent,
    ContactUsComponent,
    LandingPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
