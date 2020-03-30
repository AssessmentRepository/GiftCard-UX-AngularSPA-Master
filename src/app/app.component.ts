import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularSPA';
  constructor(private router: Router) { }
  landingpage() {
    this.router.navigateByUrl("landing-page");
  }
  placeGiftcardorderpage() {
    this.router.navigateByUrl("place-gift-card-order-page");
  }
  viewGiftCardorderspage() {
    this.router.navigateByUrl("view-gift-card-orders");
  }
  contactUspage() {
    this.router.navigateByUrl("contact-us");
  }
}
